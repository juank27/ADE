from flask import Flask, render_template


app = Flask(__name__)

#la parte del menu 
@app.route('/')
def index():
	return render_template('index.html')

@app.route('/insti')
def insti():
	return render_template('insti.html')
@app.route('/nosotros')
def nosotros():
	return render_template('index.html')
@app.route('/usuarios')
def usuarios():
	return render_template('usuarios.html')
@app.route('/contacto')
def contacto():
	return render_template('contacto.html')
@app.route('/soporte')
def soporte():
	return render_template('soporte.html')
@app.route('/herramientas')
def herramientas():
	return render_template('herramientas.html')


if __name__ == '__main__':
	app.run( port = 5000, debug = True)


