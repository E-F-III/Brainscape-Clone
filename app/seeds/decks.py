from app.models import db, Deck

def seed_decks():
    deck1 = Deck(
        title = 'Deck 1',
        class_id = 1,
        owner_id = 1
    )
    deck2 = Deck(
        title = 'Deck 2',
        class_id = 1,
        owner_id = 1
    )
    deck3 = Deck(
        title = 'Deck 3',
        class_id = 1,
        owner_id = 1
    )

    db.session.add(deck1)
    db.session.add(deck2)
    db.session.add(deck3)
    db.session.commit()

def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
