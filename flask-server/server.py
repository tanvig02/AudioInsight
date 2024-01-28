from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from io import BytesIO

api = Flask(__name__)
CORS(api, origins="http://localhost:3000")


@api.route("/profile", methods=['GET', 'POST'])
@cross_origin(supports_credentials=True)
def profile():
    response_body = {
        "name": "Tanvi",
        "share": "God is really creative, i mean... just look at me broo ~"
    }

    return jsonify(response_body)


@api.route("/audio", methods=['POST'])
def audio():
    d = {}
    try:
        file = request.files['file_from_react']
        filename = file.filename
        print(f"Uploading file {filename}")
        file_bytes = file.read()
        file_content = BytesIO(file_bytes).readlines()
        print(file_content)
        d['status'] = 1

    except Exception as e:
        print(f"Couldn't upload file {e}")
        d['status'] = 0

    return jsonify(d)


if __name__ == "__main__":
    api.run(debug=True)
