from flask import Flask
from flask_cors import CORS
from api import config_blueprint

def creat_app():
  app = Flask(__name__)
  CORS(app, origins="http://localhost:5173")

  config_blueprint(app)

  return app