import email
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='User', email='demo@aa.io', password='password')
    demo_med = User(
        first_name='Medstudent', last_name='Demo', email='demomed@aa.io', password='password')
    demo_code = User(
        first_name='Devstudent', last_name='Demo', email='demodev@aa.io', password='password')
    edward = User(
        first_name='Edward', last_name='Felipe', email='efiii@aa.io', password='password')


    db.session.add(demo)
    db.session.add(demo_med)
    db.session.add(demo_code)
    db.session.add(edward)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
