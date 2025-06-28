# app.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/temp')
def temp():
    return jsonify({"temperature": 24.5})

app.run(debug=True)
