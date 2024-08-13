from .normalData import normal
from .complexData import complex

DEFAULT_BLUEPRINT =[
  (normal,'/data'),
  (complex,'/complex'),
]

def config_blueprint(app):
  for blueprint, prefix in DEFAULT_BLUEPRINT:
    app.register_blueprint(blueprint,url_prefix=prefix)