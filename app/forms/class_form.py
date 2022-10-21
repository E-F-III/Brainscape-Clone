from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

def title_length(form, field):
    title = field.data

    if len(title) > 100:
        raise ValidationError('Title must be atmost 100 characters')

def headline_length(form, field):
    headline = field.data

    if len(headline) > 280:
        raise ValidationError('Headline must be atmost 280 characters')

def description_length(form, field):
    description = field.data

    if description and len(description) > 5000:
        raise ValidationError('Title must be atmost 5000 characters')


class ClassForm(FlaskForm):
    title = StringField('title', validators=[DataRequired(), title_length])
    headline = StringField('headline', validators=[headline_length])
    description = StringField('description', validators=[description_length])
