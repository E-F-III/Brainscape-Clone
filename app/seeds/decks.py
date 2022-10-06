from app.models import db, Deck

def seed_decks():
    demo_deck1 = Deck(
        title = 'Deck 1',
        class_id = 1,
        owner_id = 1
    )
    demo_deck2 = Deck(
        title = 'Deck 2',
        class_id = 1,
        owner_id = 1
    )
    demo_deck3 = Deck(
        title = 'Deck 3',
        class_id = 1,
        owner_id = 1
    )

    db.session.add(demo_deck1)
    db.session.add(demo_deck2)
    db.session.add(demo_deck3)
    db.session.commit()

    js_deck = Deck(
        title = 'Intro to JS',
        class_id = 2,
        owner_id = 1
    )

    py_deck = Deck(
        title = 'Intro to Python',
        class_id = 2,
        owner_id = 1
    )

    html_css_deck = Deck(
        title = 'HTML and CSS',
        class_id = 2,
        owner_id = 1
    )

    db.session.add(js_deck)
    db.session.add(py_deck)
    db.session.add(html_css_deck)
    db.session.commit()


def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
