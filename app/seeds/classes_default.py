from app.models import db, Class

def seed_classes_default():
    demo_class = Class(
        title='Demo Class',
        owner_id=1
    )
    demo_class_code = Class(
        title='Code',
        owner_id=1
    )
    demo_class_med = Class(
        title='Medical',
        owner_id=1
    )


    db.session.add(demo_class)
    db.session.add(demo_class_code)
    db.session.add(demo_class_med)
    db.session.commit()

def undo_classes_default():
    db.session.execute('TRUNCATE classes RESTART IDENTITY CASCADE;')
    db.session.commit()
