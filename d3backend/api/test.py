from flask import Blueprint
import json

test = Blueprint('test', __name__)


@test.route("/", methods=['GET'])
def getTestData():
    op = open('output.json', 'r')
    data = json.load(op)
    return data
