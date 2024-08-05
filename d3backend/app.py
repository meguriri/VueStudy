from flask import Flask
from flask_cors import CORS, cross_origin
import random

app = Flask(__name__)
CORS(app, origins="http://localhost:5173")


@app.route("/data/bar")
def getBarData():
    data = []
    size = random.randint(6, 12)
    for i in range(size):
        num = random.randint(10, 80)
        name = random.randint(97, 122)
        data.append({'name': chr(name), 'value': num})
    return {
        "msg": 200,
        "data": data,
    }

@app.route("/data/path")
def getPathData():
    data = [
        {"date": "2024-Aug-1", "value": random.randint(10, 50)},
        {"date": "2024-Aug-2", "value": random.randint(10, 50)},
        {"date": "2024-Aug-3", "value": random.randint(10, 50)},
        {"date": "2024-Aug-4", "value": random.randint(10, 50)},
        {"date": "2024-Aug-5", "value": random.randint(10, 50)},
        {"date": "2024-Aug-6", "value": random.randint(10, 50)},
        {"date": "2024-Aug-7", "value": random.randint(10, 50)},
        {"date": "2024-Aug-8", "value": random.randint(10, 50)},
        {"date": "2024-Aug-9", "value": random.randint(10, 50)},
        {"date": "2024-Aug-10", "value": random.randint(10, 50)},
    ]
    return {
        "msg": 200,
        "data": data,
    }



if __name__ == "__main__":
    app.run(host="localhost", port=5002)