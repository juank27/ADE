import flask
import threading
from flask import render_template,request, copy_current_request_context, flash,redirect, url_for
from flask_mysqldb import MySQL
from flask_mail import Mail,Message
from principal import inicio
from docente import docente
from flask import session

app = flask.Flask(__name__)
app.config.from_object("config.DevelopmentConfig")
mysql = MySQL(app)

def dataSession():
	#traigo la info de la session
	if 'info' in session:
		info = session['info']
		print(info)
	else:
		return redirect(url_for('index'))
	return info

@app.errorhandler(404)
def page_not_found(error):
	return render_template("principal/error404.html")
	
@app.route('/')
def index():
	#cierro la session
	if 'info' in session:
		session.pop('info')
	else:
		return render_template('principal/index.html')
	return render_template('principal/index.html')

app.register_blueprint(inicio)
app.register_blueprint(docente)

@app.route('/logout', methods=['GET', 'POST'])
def logout():
	#cierro la session':
	if 'info' in session:
		session.pop('info')
	return redirect(url_for('index'))

@app.route('/login', methods=['GET', 'POST'])
def login():
	if request.method == 'POST':
		email = request.form['email']
		password = request.form['password']
		email = email.lower()

		cur = mysql.connection.cursor()
		cur.execute("""SELECT nombre_docente,apellido_docente,num_id_docente,correo_docente,contrasena_docente FROM docente WHERE correo_docente = %s""",
						(email,))
		dataemail = cur.fetchall()
		cur.execute("""SELECT * FROM docente WHERE contrasena_docente = %s""",
						(password,))
		datapass = cur.fetchall()
		registro = dataemail[0]
		print(registro)
		print(dataemail[0])

		if len(dataemail) != 0 and len(datapass) != 0:
			session['info'] = registro
			#return render_template('docentes/menuD.html')
			return redirect(url_for('docente.menu'))
		else :
			flash('Datos Incorrectos')
	return render_template('principal/menu.html')

# -------- Registro Docente -------
@app.route('/registroDocente', methods=['GET', 'POST'])
def registroDocente():
	if request.method == 'POST':
		nombre = request.form['nombres']
		apellido = request.form['apellido']
		idnum = request.form['id']
		email = request.form['email']
		password = request.form['contrasena']
		verifpassword = request.form['verifcontrasena']

		nombre = nombre.title()
		apellido = apellido.title()
		registro = [nombre, apellido, idnum, email, password]
		cur = mysql.connection.cursor()
		cur.execute("""SELECT num_id_docente FROM docente WHERE num_id_docente = %s """,
						(idnum,))
		data =	cur.fetchall()
		cur.execute("""SELECT correo_docente FROM docente WHERE correo_docente = %s""",
						(email,))
		dataemail =	cur.fetchall()
		print(data)
		print(dataemail)
		if len(data) == 0 and len(dataemail) == 0:
			if password == verifpassword :
				cur.execute('INSERT INTO docente (nombre_docente, apellido_docente, correo_docente, num_id_docente, contrasena_docente, avatar_docente) VALUES (%s,%s,%s,%s,%s,%s)',
									(nombre,apellido,email,idnum,password,'directivos/img/4.png'))
				mysql.connection.commit()
				cur.close()
				#creo la session
				session['info'] = registro
				flash('Datos registrados Exitosamente')
				return redirect(url_for('indexDocente'))
			else:
				flash('Verifique la contraseña')
		else:
			flash('Datos ya registrados')

	return render_template('principal/menu.html')

# ------- Docente ------
@app.route('/registroDocente')
def indexDocente():
	#traigo la info de la session
	if 'info' in session:
		info = session['info']
		print(info)
	else:
		return redirect(url_for('index'))
	return render_template('docentes/inicio.html', data=info)

@app.route('/foto')
def foto():
	data = dataSession()
	idnum = data[2]
	cur = mysql.connection.cursor()
	cur.execute("""SELECT avatar_docente FROM docente WHERE num_id_docente = %s""",
					(idnum,))
	data =	cur.fetchall()
	dataa = data[0][0]
	print(dataa)
	return render_template('docentes/foto.html', avatar=dataa)


if __name__ == '__main__':
	app.run(debug = True)