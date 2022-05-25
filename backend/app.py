from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow


app = Flask(__name__)
app.config["MYSQL_HOST"]="127.0.0.1"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password@localhost/python_proj'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)
ma = Marshmallow(app)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), unique = True)
    text = db.Column(db.Text)
    date = db.Column(db.DateTime, default = datetime.datetime.now)

    def __init__(self, title, text):
        self.title = title
        self.text = text


class PostSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'text', 'date')

post_schema = PostSchema()
posts_schema = PostSchema(many=True)


@app.route('/', methods = ['GET'])
def get_posts():
    all_posts = Post.query.all()
    results = posts_schema.dump(all_posts)
    return jsonify(results)\

        

@app.route('/add', methods = ['POST'])
def add_post():
    title = request.json["title"]
    text = request.json["text"]

    post = Post(title, text)
    db.session.add(post)
    db.session.commit()
    return post_schema.jsonify(post)




if __name__ == "__main__":
    app.run(debug=True)
