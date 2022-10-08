from termios import VLNEXT
from unicodedata import name
from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

def name_length(form, field):
    name = field.data
    if len(name) > 15:
        raise ValidationError('Name cannot be more than 15 characters')

class SignUpForm(FlaskForm):
    firstName = StringField('firstName', validators=[DataRequired(), name_length])
    lastName = StringField('lastName', validators=[DataRequired(), name_length])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
