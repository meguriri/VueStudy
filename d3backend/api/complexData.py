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

  return {
    "msg": 200,
    "data": data,
  }

@complex.route("/stackBar",methods=['GET'])
def getStackBarData():
  data = {
    'Xbar':['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    'name':['Aa','Bb','Cc','Dd','Ee'],
    'data':[
      {"date":'Mon','Aa':20,'Bb':30,'Cc':10,"Dd":25,"Ee":40},
      {"date":'Tue','Aa':10,'Bb':5,'Cc':20,"Dd":30,"Ee":30},
      {"date":'Wed','Aa':30,'Bb':40,'Cc':30,"Dd":40,"Ee":30},
      {"date":'Thu','Aa':40,'Bb':40,'Cc':40,"Dd":50,"Ee":20},
      {"date":'Fri','Aa':15,'Bb':10,'Cc':50,"Dd":20,"Ee":15},
      {"date":'Sat','Aa':50,'Bb':30,'Cc':25,"Dd":15,"Ee":20},
      {"date":'Sun','Aa':10,'Bb':40,'Cc':30,"Dd":40,"Ee":15},
    ],
  }
  return {
    'msg':200,
    'data':data,
  }