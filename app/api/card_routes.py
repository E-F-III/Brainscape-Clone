from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Card

card_routes = Blueprint('cards', __name__)
