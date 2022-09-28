from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Deck
from app.forms import DeckForm

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
