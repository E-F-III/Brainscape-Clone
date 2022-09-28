from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Card
from app.forms import CardForm

card_routes = Blueprint('cards', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



# Edit a card by id
@card_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_card(id):
    card = Card.query.get(id)

    if not card:
        return {"message": "Card could not be found", "statusCode": 404}, 404

    if card.owner_id != current_user.id:
        return {"message": "Forbidden", "statusCode": 403}, 403

    form = CardForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit:
        card.question = form.question.data
        card.answer = form.answer.data

        db.session.add(card)
        db.session.commit()

        return card.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# Delete a card by id
@card_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_card(id):
    card = Card.query.get(id)

    if not card:
        return {"message": "Card could not be found", "statusCode": 404}, 404

    if card.owner_id != current_user.id:
        return {"message": "Forbidden", "statusCode": 403}, 403

    db.session.delete(card)
    db.session.commit()

    return { "message": "Successfully deleted", "statusCode": 200 }, 200
