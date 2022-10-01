from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Class, Deck
from app.forms import DeckForm

class_routes = Blueprint('classes', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



# Get classes of current user
@class_routes.route('/session')
@login_required
def get_classes_of_current_user():
    # classes = Class.query.filter(Class.owner_id == current_user.id).all()

    return {'classes': [singleClass.to_dict() for singleClass in current_user.classes]}



# Get decks of a class specified by id
@class_routes.route('/<int:id>/decks', methods=["GET"])
def get_decks_of_a_class(id):
    single_class = Class.query.get(id)

    if not single_class:
        return {"message": "Class could not be found", "statusCode": 404}, 404

    # decks = Deck.query.filter(Deck.class_id == id).all()

    return { 'decks': [deck.to_dict() for deck in single_class.decks] }



# Create a deck for a class specified by id
@class_routes.route('/<int:id>/decks', methods=["POST"])
@login_required
def create_deck(id):
    single_class = Class.query.get(id)

    if not single_class:
        return {"message": "Class could not be found", "statusCode": 404}, 404

    form = DeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit:
        deck = Deck(
            owner_id = current_user.id,
            class_id = id,
            title = form.title.data,
            description = form.description.data
        )

        db.session.add(deck)
        db.session.commit()

        return deck.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
