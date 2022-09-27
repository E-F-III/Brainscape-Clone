from .db import db

class Class(db.model):
    __tablename__ = 'classes'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(100))
    description = db.Column(db.String(5000))

    owner = db.relationship("User", back_populates='classes')

    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.owner_id,
            'title': self.title,
            'description': self.description
        }
