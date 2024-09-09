from .normalData import normal
from .complexData import complex
from .test import test

DEFAULT_BLUEPRINT =[
  (normal,'/data'),
  (complex,'/complex'),
  (test,'/test'),
]

def config_blueprint(app):
  for blueprint, prefix in DEFAULT_BLUEPRINT:
    app.register_blueprint(blueprint,url_prefix=prefix)