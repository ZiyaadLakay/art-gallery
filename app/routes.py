from flask import render_template
from app import app
import requests
import json

@app.route('/')
@app.route('/index')
def index():
    
    return render_template('index.html', title='Home')