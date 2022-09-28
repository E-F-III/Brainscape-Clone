from .db import db

class Card(db.Model):
    __tablename__ = 'cards'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    deck_id = db.Column(db.Integer, db.ForeignKey('decks.id'), nullable=False)
    question = db.Column(db.String(), nullable=False)
    answer = db.Column(db.String(), nullable=False)

    owner = db.relationship("User", back_populates='cards')
    deck = db.relationship("Deck", back_populates='cards')

    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.owner_id,
            'deckId': self.deck_id,
            'question': self.question,
            'answer': self.answer
        }
