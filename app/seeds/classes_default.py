from app.models import db, Class

def seed_classes_default():
    demo_class = Class(
        title='Demo Class',
        owner_id=1
    )

    # demo_class_ = Class(
    #     title=''
    # )

    db.session.add(demo_class)
    db.session.commit()

def undo_classes_default():
    db.session.execute('TRUNCATE classes RESTART IDENTITY CASCADE;')
    db.session.commit()
