from .db import db

class Deck(db.model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    class_id = db.Column(db.Intrger, db.ForeignKey('classes.id'), nullable=False)
    title = db.Column(db.String(100))
    description = db.Column(db.String(5000))

    owner = db.relationship("User", back_populates='decks', cascade="all, delete-orphan")
    deck = db.relationship("Deck", back_populates='decks', cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.owner_id,
            'classId': self.class_id,
            'title': self.title,
            'description': self.description
        }
