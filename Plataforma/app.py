import flask
import threading
from flask import render_template,request, copy_current_request_context, flash,redirect, url_for
from flask_mysqldb import MySQL
from flask_mail import Mail,Message
from flask_mysqldb import MySQL
from principal import inicio

app = flask.Flask(__name__)
app.config.from_object("config.DevelopmentConfig")

@app.errorhandler(404)
def page_not_found(error):
	return render_template("principal/error404.html")
	
@app.route('/')
def index():
	return render_template('principal/index.html')

app.register_blueprint(inicio)

if __name__ == '__main__':
	app.run(debug = True)