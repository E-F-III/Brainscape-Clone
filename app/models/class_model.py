from .db import db

class Class(db.Model):
    __tablename__ = 'classes'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    headline = db.Column(db.string(280))
    description = db.Column(db.String(5000))

    owner = db.relationship("User", back_populates='classes')
    decks = db.relationship("Deck", back_populates='assigned_class', cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.owner_id,
            'title': self.title,
            'headline': self.headline,
            'description': self.description
        }
