from .db import db

class Deck(db.Model):
    __tablename__ = 'decks'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    class_id = db.Column(db.Integer, db.ForeignKey('classes.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(5000))

    owner = db.relationship("User", back_populates='decks')
    assigned_class = db.relationship("Class", back_populates='decks')

    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.owner_id,
            'classId': self.class_id,
            'title': self.title,
            'description': self.description
        }
