from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(80), unique=False, nullable=False)
    quote = db.Column(db.String(200), unique=False, nullable=False)
    todos = db.relationship('Todo', backref='user', cascade="all, delete-orphan", lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "quote": self.quote,
        }

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    content = db.Column(db.String(120), unique=False, nullable=False)
    completed = db.Column(db.Boolean(), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete='CASCADE'), nullable=False)
    
    def serialize(self):
        return {
            "id": self.id,
            "content": self.content,
            "completed": self.completed,
            "user_id": self.user_id
        }