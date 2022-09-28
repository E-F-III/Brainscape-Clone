from flask import Blueprint
from flask_login import current_user, login_required
from app.models import Class

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

@class_routes.route('/session')
@login_required
def get_businesses_of_current_user():
    classes = Class.query.filter(Class.owner_id == current_user.id).all()

    return {'classes': [singleClass.to_dict() for singleClass in classes]}
