from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

def title_length(form, field):
    title = field.data

    if len(title) > 100:
        raise ValidationError('Title must be atmost 100 characters')

def description_length(form, field):
    description = field.data

    if description and len(description) > 5000:
        raise ValidationError('Title must be atmost 5000 characters')


class DeckForm(FlaskForm):
    title = StringField('title', validators=[DataRequired(), title_length])
    description = StringField('description', validators=[description_length])
