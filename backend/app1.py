from flask import Flask, render_template
from flask_pymongo import PyMongo
import pymongo
from pymongo import MongoClient
from flask_webpackext import WebpackExt

app = Flask(__name__)
webpack = WebpackExt(app)

myclient = MongoClient("mongodb+srv://21pa1a1286:charishma@cluster0.nsdecj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

from components import Lander

# Lander
@app.route("/", methods=['GET'])
def lander():
    return render_template(Lander)

if __name__ == '__main__':
    app.run(debug=True)




from flask import Flask, render_template, request, flash, url_for, redirect, session
from flask_pymongo import PyMongo
from flask_react_renderer import render_component
import pymongo
from pymongo import MongoClient
from bson.objectid import ObjectId
from datetime import datetime
import base64

app = Flask(__name__)
app.secret_key = "21pa1a1286@2025"

myclient = MongoClient("mongodb+srv://21pa1a1286:charishma@cluster0.nsdecj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

# d = list(patientcol.find().sort("date", pymongo.ASCENDING))
# print(d)

from components import Lander

# Lander
@app.route("/", methods=['GET'])
def lander():
    return render_component(Lander)

if __name__ == "__main__":
    app.run(debug=True)