import flask
from flask import render_template
from principal import inicio

app =flask.Flask(__name__)
app.config["DEBUG"]=True

@app.route('/')
def index():
	return render_template('principal/contacto.html')

app.register_blueprint(inicio)

app.run()