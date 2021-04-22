import flask
import threading
from flask import g #variable global
from flask import render_template,request, copy_current_request_context, flash
from flask_mysqldb import MySQL
from flask_mail import Mail,Message
from flask_mysqldb import MySQL
from principal import inicio

app = flask.Flask(__name__)

#Mysql Connection
app.config['MYSQL_HOST'] =	'127.0.0.1'
app.config['MYSQL_USER'] =	'root'
app.config['MYSQL_PASSWORD'] =	''
app.config['MYSQL_DB'] = 'prueba'
mysql = MySQL(app)
app.secret_key = 'mysecretkey'

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = "adeplataforma@gmail.com"
app.config['MAIL_PASSWORD'] = "ADE123456"
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail()

def send_email(user_email, asunto):
	msg = Message(asunto, sender = 'adeplataforma@gmail.com', recipients = [user_email] )
	msg.html = render_template('principal/Registro_institucion.html')
	mail.send(msg)

def cusulta_institucion():
	cur = mysql.connection.cursor()
	cur.execute('SELECT NOMBRE_ESTABLECIMIENTO FROM institucion_1')
	data = cur.fetchall()
	return data
	
@app.route('/')
def index():
	return render_template('principal/index.html')

app.register_blueprint(inicio)

@app.route('/contacto')
def contacto():
	#cur = mysql.connection.cursor()
	#cur.execute('SELECT NOMBRE_ESTABLECIMIENTO FROM institucion_1')
	#data = cur.fetchall()
	@copy_current_request_context
	def send_consulta():
		ola = cusulta_institucion()
		return ola
	sender = threading.Thread(name = 'cunsulta', target = send_consulta, args = ())
	sender.start()
	print(send_consulta())
	#flash(send_consulta())
	#ss = send_consulta()
	return render_template('principal/contacto.html', institucion = send_consulta())

#configuracion 
@app.route('/enviarInscripciones' , methods=['GET','POST'])
def enviarInscripciones():
	if request.method == 'POST':
		nameRector = request.form['nameRector']
		email = request.form['email']
		telefono = request.form['telefono']
		#nameInstitucion = request.form['nameInstitucion']
		codDane = request.form['codDane']
		municipio = request.form['municipio']
		numUsuarios = request.form['numUsuarios']
		comentarios = request.form['comentarios']
		asunto = 'Registro ' 
		#msg = Message(asunto, sender = 'adeplataforma@gmail.com', recipients = [email] )
		#msg.html = render_template('principal/Registro_institucion.html' , nombre = nameRector)
		#mail.send(msg)
		#print(email)
		#Envio del correo 
		@copy_current_request_context 
		def send_message(email, asunto):
			send_email(email, asunto)
		sender = threading.Thread(name = 'mailll', target = send_message, args = (email , asunto))
		sender.start()
	return render_template('principal/index.html')

if __name__ == '__main__':
	mail.init_app(app)
	app.run(debug = True)