from flask import render_template
from app import app
import requests
import json

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Miguel'}
    data = {}
    posts = [
        {
            'author': {'username': 'John'},
            'body': 'Beautiful day in Portland!'
        },
        {
            'author': {'username': 'Susan'},
            'body': 'The Avengers movie was so cool!'
        }
    ]

    # for i in range(1,200):
    #     response = requests.get(f"https://collectionapi.metmuseum.org/public/collection/v1/objects/{i}")
    #     res = response.json()
    #     data[f"{i}"] = res

    # print(data['7'])
    return render_template('index.html', title='Home', user=user, posts=posts)