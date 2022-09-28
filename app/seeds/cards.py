from app.models import db, Card
from random import randint

def seed_cards():
    for card_id in range(1, 15):
        deck_num = randint(1, 3)

        card = Card(
            owner_id = 1,
            deck_id = deck_num,
            question = f'Question {card_id}',
            answer = f'Answer {card_id}'
        )

        db.session.add(card)

    db.session.commit()

def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
