from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Deck, Card
from app.forms import DeckForm, CardForm

deck_routes = Blueprint('decks', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



# Get cards of a deck specified by id
@deck_routes.route('/<int:id>/cards', methods=["GET"])
def get_cards_of_a_deck(id):
    deck = Deck.query.get(id)

    if not deck:
        return {"message": "Deck could not be found", "statusCode": 404}, 404

    # cards = Card.query.filter(Card.deck_id == id).all()

    return { 'cards': [card.to_dict() for card in deck.cards] }



# Create a card for a deck specified by id
@deck_routes.route('/<int:id>/cards', methods=["POST"])
@login_required
def create_card(id):
    deck = Deck.query.get(id)

    if not deck:
        return {"message": "Deck could not be found", "statusCode": 404}, 404

    form = CardForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit:
        card = Card(
            owner_id = current_user.id,
            deck_id = id,
            question = form.question.data,
            answer = form.answer.data
        )

        db.session.add(card)
        db.session.commit()

        return card.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401



# Edit a deck by id
@deck_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_deck(id):
    deck = Deck.query.get(id)

    if not deck:
        return {"message": "Deck could not be found", "statusCode": 404}, 404

    if deck.owner_id != current_user.id:
        return {"message": "Forbidden", "statusCode": 403}, 403

    form = DeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit:
        deck.title = form.title.data
        deck.description = form.description.data

        db.session.add(deck)
        db.session.commit()

        return deck.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# Delete a deck by id
@deck_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_deck(id):
    deck = Deck.query.get(id)

    if not deck:
        return {"message": "Deck could not be found", "statusCode": 404}, 404

    if deck.owner_id != current_user.id:
        return {"message": "Forbidden", "statusCode": 403}, 403

    db.session.delete(deck)
    db.session.commit()

    return { "message": "Successfully deleted", "statusCode": 200 }, 200
