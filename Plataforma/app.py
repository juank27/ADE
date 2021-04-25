import flask
import threading
import string
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

@app.errorhandler(404)
def page_not_found(error):
	return render_template("principal/error404.html")
	
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
		departamento = request.form['departamento']
		numUsuarios = request.form['numUsuarios']
		comentarios = request.form['comentarios']
		asunto = 'Registro ' + nameInstitucion
		#print(n)
		cur = mysql.connection.cursor()
		cur.execute("""SELECT NOMBRE_ESTABLECIMIENTO, DEPARTAMENTO, EMAIL, RECTOR FROM institucion_1 WHERE CODIGO_DANE = %s""",
						 (codDane,))
		data = cur.fetchall()
		print(len(data))
		if len(data) != 0:	
			print(data)
			if (data[0][0] == nameInstitucion) and (data[0][1] == departamento) :
				if (data[0][2] == email) and (data[0][3] == nameRector):
					print('verifica nuevamente los datos')
					flash('verifica nuevamente los datos')
				else:
					print('Datos verificados correctamente')	
					flash('Datos verificados correctamente')
					@copy_current_request_context 
					def send_message(email, asunto):
						send_email(email, asunto)
					sender = threading.Thread(name = 'mail', target = send_message, args = (email , asunto))
					sender.start()
					flash('Revisa tu correo')
			else:
				print('verifica nuevamente los datos')
				flash('verifica nuevamente los datos')
		else:
			print("Datos Erroneos")
			flash('Datos Erroneos')
			
	return render_template('principal/contacto.html')

if __name__ == '__main__':
	mail.init_app(app)
	app.run(debug = True)