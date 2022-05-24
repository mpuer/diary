from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
app.config["MYSQL_HOST"]="127.0.0.1"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/python_proj'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), unique = True)
    text = db.Column(db.Text())
    date = db.Column(db.DateTime, default = datetime.datetime.now)

    def __init__(self, title, body):
        self.title = title
        self.body = body





@app.route('/', methods = ['GET'])
def get_posts():
    return jsonify({"Hello": "World"})

if __name__ == "__main__":
    app.run(debug=True)
