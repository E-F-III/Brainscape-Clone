from flask.cli import AppGroup
from .users import seed_users, undo_users
from .classes_default import seed_classes_default, undo_classes_default
from .decks import seed_decks, undo_decks

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_classes_default()
    seed_decks()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_classes_default()
    undo_decks()
