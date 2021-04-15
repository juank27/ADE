import flask
from flask import render_template
inicio= flask.Blueprint('inicio', __name__)

@inicio.route('/insti')
def insti():
	return render_template('principal/insti.html')
@inicio.route('/nosotros')
def nosotros():
	return render_template('principal/index.html')
@inicio.route('/usuarios')
def usuarios():
	return render_template('principal/usuarios.html')
@inicio.route('/contacto')
def contacto():
	return render_template('principal/contacto.html')
@inicio.route('/soporte')
def soporte():
	return render_template('principal/soporte.html')
@inicio.route('/herramientas')
def herramientas():
	return render_template('principal/herramientas.html')


