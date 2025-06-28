from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/temp')
def temp():
    return jsonify({"temperature": 24.5})

app.run(host='0.0.0.0', port=5000, debug=True)
