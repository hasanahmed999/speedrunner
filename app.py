# https://www.digitalocean.com/community/tutorials/how-to-make-a-web-application-using-flask-in-python-3
from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='templates')

@app.route('/')
def index():
	return render_template('index.html')
