from flask import Blueprint,request
import random

complex = Blueprint('complex',__name__)

@complex.route("/path",methods=['GET'])
def getPathData():
  choose1 = request.args.get('choose1')
  choose2 = request.args.get('choose2')
  print('choose1: ',choose1)
  print('choose2: ',choose2)
  data = [
    {
      'name': 'china',
      'data':[
        {'date': 2000,'goal':28},
        {'date': 2004,'goal':32},
        {'date': 2008,'goal':48},
        {'date': 2012,'goal':39},
        {'date': 2016,'goal':20},
        {'date': 2020,'goal':38},
        {'date': 2024,'goal':40},
      ],
    },
    {
      'name': 'America',
      'data':[
        {'date': 2000,'goal':39},
        {'date': 2004,'goal':35},
        {'date': 2008,'goal':36},
        {'date': 2012,'goal':46},
        {'date': 2016,'goal':26},
        {'date': 2020,'goal':39},
        {'date': 2024,'goal':40},
      ],
    },
    {
      'name': 'Japan',
      'data':[
        {'date': 2000,'goal':5},
        {'date': 2004,'goal':16},
        {'date': 2008,'goal':9},
        {'date': 2012,'goal':7},
        {'date': 2016,'goal':12},
        {'date': 2020,'goal':27},
        {'date': 2024,'goal':20},
      ],
    },
  ]
  # res = {}
  # if choose1 == 'Original':
  #   res = data[0]
  # elif choose1 == 'Relation':
  #   res = data[1]
  # else:
  #   res = data[2]

  return {
    "msg": 200,
    "data": data,
    #"data": res,
  }