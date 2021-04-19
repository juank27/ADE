import flask
from flask import render_template,request
from flask_mail import Mail,Message
from principal import inicio

app = flask.Flask(__name__)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = "adeplataforma@gmail.com"
app.config['MAIL_PASSWORD'] = "ADE123456"
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail()

@app.route('/')
def index():
	return render_template('principal/index.html')

app.register_blueprint(inicio)

#configuracion 
@app.route('/enviarInscripciones' , methods=['GET','POST'])
def enviarInscripciones():
	if request.method == 'POST':
		nameRector = request.form['nameRector']
		email = request.form['email']
		telefono = request.form['telefono']
		nameInstitucion = request.form['nameInstitucion']
		codDane = request.form['codDane']
		municipio = request.form['municipio']
		numUsuarios = request.form['numUsuarios']
		comentarios = request.form['comentarios']
		asunto = 'Registro ' + nameInstitucion
		msg = Message(asunto, sender = 'adeplataforma@gmail.com', recipients = [email] )
		msg.html = render_template('principal/correo_registro.html' , nombre = nameRector)
		mail.send(msg)
 
	return render_template('principal/index.html')

if __name__ == '__main__':
	mail.init_app(app)
	app.run(debug = True)