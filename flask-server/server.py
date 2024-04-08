from flask import Flask, jsonify, request, abort, redirect, url_for
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from io import BytesIO
from config import ApplicationConfig
from models import db, User
from flask_jwt_extended import create_access_token, JWTManager, get_jwt_identity, jwt_required

api = Flask(__name__)
CORS(api, supports_credentials=True)
CORS(api, origins="http//localhost:3000/")
api.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(api)
jwt = JWTManager(api)
db.init_app(api)


#create table in database
with api.app_context():
    db.create_all()


#home route
@api.route("/profile", methods=['GET', 'POST'])
def profile():
    response_body = {
        "name": "Tanvi",
        "share": "God is really creative, i mean... just look at me broo ~"
    }

    return jsonify(response_body)


#Login route
@api.route("/secure", methods=["GET"])
@jwt_required()
def current_user_id():
    current_user_id = get_jwt_identity()
    return{"msg": f"hello user {current_user_id}, you accessed the protected resource"}, 200



#Register route
@api.route("/register", methods=['POST'])
def register_user():
    data = request.get_json()
    email = data['email']
    password = data['password']

    user_exist = User.query.filter_by(email=email).first()

    if user_exist:
        return jsonify({"error": "User already exist"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({
        "id": new_user.id,
        "email": new_user.email,
        "msg": "User Registed successfully"
    }), 200


#Login route
@api.route("/login", methods=["POST"])
def login_user():
    data = request.get_json()
    email = data['email']
    password = data['password']

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "User do not exist"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "User do not exist"}), 401
    
    access_token = create_access_token(identity=user.id)
    return jsonify({"access_token": access_token, "email": email}), 200



#Audio file summary
@api.route("/audio", methods=['POST'])
def audio():
    # d = {}
    try:
        file = request.files['file_from_react']
        filename = file.filename
        print(f"Uploading file {filename}")
        file_bytes = file.read()
        file_content = BytesIO(file_bytes).readlines()
        # print(file_content)
        # d['status'] = 1
        return jsonify({file_content}), 200

    except Exception as e:
        print(f"Couldn't upload file {e}")
        # d['status'] = 0
        return 400

    # return jsonify(d)


#Text Summary
@api.route("/text", methods=["POST"])
def text():
    d = {}
    try:
        # getting the text for summarization
        textData = request.data
        print(textData)
        d['status'] = 1

    except Exception as e:
        print(f"couldn't get the text {e}")
        d['status'] = 0

    return jsonify(d)


if __name__ == "__main__":
    api.run(debug=True)
