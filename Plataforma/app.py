import flask
import threading
import string
from flask import g #variable global
from flask import render_template,request, copy_current_request_context, flash,redirect, url_for
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

# def send_email(user_email, asunto):
#	ja = "juan"
#	msg = Message(asunto, sender = 'adeplataforma@gmail.com', recipients = [user_email] )
#	msg.html = render_template('principal/Registro_institucion.html', email = ja)
#	mail.send(msg)

@app.route('/registroInstitucion')
def send_email(user_email, asunto, datosregistro):
	msg = Message(asunto, sender = 'adeplataforma@gmail.com', recipients = [user_email] )
	msg.html = render_template('principal/Registro_institucion.html', datos = datosregistro)
	mail.send(msg)

@app.route('/registroFinal')
def send_email_final(user_email, asunto, datosregistro):
	msg = Message(asunto, sender = 'adeplataforma@gmail.com', recipients = [user_email] )
	msg.html = render_template('principal/enviarRegistro.html', datos = datosregistro)
	mail.send(msg)

# def regInstitucion():
#	ja = "juan"
#	return render_template('principal/Registro_institucion.html', email = ja)

@app.route('/registroFinal', methods=['GET','POST'])
def registroFinal():
	if request.method == 'POST' :
		nameInstitucion = request.form['institucion']
		nameRector = request.form['rector']
		email = request.form['email']
		telefono = request.form['telefono']
		dane = request.form['dane']
		departamento = request.form['departamento']
		numUsuarios = request.form['usuarios']
		asunto = "Datos y codigos de acceso " + nameInstitucion

		danne = list(dane)
		codigo = []

		for numero in range(3):
			aletorio=random.sample(danne,12)
			cadena="".join(aletorio)
			codigo.append(cadena)

		directivo = codigo[0]
		docente = codigo[1]
		estudiante = codigo[2]	
		datosregistro = (nameInstitucion,nameRector,email,telefono,dane,departamento,numUsuarios, 
							directivo, docente, estudiante)

		cur = mysql.connection.cursor()
		cur.execute("""SELECT codDirectivo = %s, codDocente= %s, codEstudiante= %s FROM instituciones WHERE codigoDane = %s""",
					(directivo, docente, estudiante, dane))
		mysql.connection.commit()

		@copy_current_request_context 
		def send_message_final(email, asunto, datosregistro):
			send_email_final(email, asunto, datosregistro)
		sender = threading.Thread(name = 'mail', target = send_message, args = (email , asunto))
		sender.start()

	return render_template('principal/registro_final.html', codigos = codigo)

@app.errorhandler(404)
def page_not_found(error):
	return render_template("principal/error404.html")
	
@app.route('/')
def index():
	return render_template('principal/index.html')
@app.route('/index')
def inicioo():
	return render_template('principal/index.html')

app.register_blueprint(inicio)

#configuracion 
@app.route('/enviarInscripciones' , methods=['GET','POST'])
def enviarInscripciones():
	if request.method == 'POST':
		nameRector = request.form['nameRector']
		emaill = request.form['email']
		telefono = request.form['telefono']
		nameInstitucion = request.form['nameInstitucion']
		codDane = request.form['codDane']
		departamento = request.form['departamento']
		numUsuarios = request.form['numUsuarios']
		comentarios = request.form['comentarios']
		
		nameRector = nameRector.upper()
		email = emaill.lower()
		nameInstitucion = nameInstitucion.upper()
		departamento = departamento.upper()
		asunto = 'Registro ' + nameInstitucion

		datosregistro = (nameRector,email,telefono,nameInstitucion, codDane, departamento,numUsuarios)
		print(emaill)
		#print(n)
		#cur.execute("""SELECT NOMBRE_ESTABLECIMIENTO, DEPARTAMENTO, EMAIL, RECTOR FROM institucion_1 WHERE CODIGO_DANE = %s""",
		#				 (codDane,))
		cur = mysql.connection.cursor()
		cur.execute("""SELECT nombreRector, email, nombreInstitucion, departamento FROM instituciones WHERE codigoDane = %s""",
						 (codDane,))
		dataInstitucion = cur.fetchall()

		#print(len(data))
		if len(dataInstitucion) == 0:	
			cur = mysql.connection.cursor()
			cur.execute("""SELECT NOMBRE_ESTABLECIMIENTO, DEPARTAMENTO, EMAIL, RECTOR FROM institucion_1 WHERE CODIGO_DANE = %s""",
						 (codDane,))
			data = cur.fetchall()
			if (data[0][0] == nameInstitucion) and (data[0][1] == departamento) :
				if (data[0][2] == email) and (data[0][3] == nameRector):
					print('verifica nuevamente los datos')
					flash('verifica nuevamente los datos')
				else:
					print('Datos verificados correctamente')	
					flash('Datos verificados correctamente')
					@copy_current_request_context 
					def send_message(emaill, asunto, datosregistro):
						send_email(emaill, asunto, datosregistro)
					sender = threading.Thread(name = 'mail', target = send_message, args = (emaill , asunto, datosregistro))
					sender.start()

					flash('Revisa tu correo')
					cur.execute('INSERT INTO instituciones (nombreRector, email, telefono, nombreInstitucion, codigoDane, departamento, numeroUsuarios, codDirectivo, codDocente, codEstudiante) VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)',
								(nameRector,email,telefono,nameInstitucion,codDane,departamento,numUsuarios,'0','0','0'))
					mysql.connection.commit() #ejecutar consulta
					cur.close()
			else:
				print('verifica nuevamente los datos')
				flash('verifica nuevamente los datos')
		else:
			print(dataInstitucion)
			print('Datos ya registrados')
			flash('Datos ya registrados')
			
	return render_template('principal/contacto.html')

if __name__ == '__main__':
	mail.init_app(app)
	app.run(debug = True)