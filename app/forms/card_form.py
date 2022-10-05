from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError

def question_length(form, field):
    question = field.data

    if len(question) > 500:
        raise ValidationError('Question must be atmost 500 characters')

def answer_length(form, field):
    answer = field.data

    if len(answer) > 500:
        raise ValidationError('Answer must be atmost 500 characters')
class CardForm(FlaskForm):
    question = StringField('question', validators=[DataRequired(), question_length])
    answer = StringField('answer', validators=[DataRequired(), answer_length])
