import flask
import threading
import random
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
		cur.execute("""SELECT nombre_docente,apellido_docente,num_id_docente,correo_docente,contrasena_docente,avatar_docente FROM docente WHERE correo_docente = %s""",
						(email,))
		dataemail = cur.fetchall()
		cur.execute("""SELECT * FROM docente WHERE contrasena_docente = %s""",
						(password,))
		datapass = cur.fetchall()
		registro = dataemail[0]
		print(registro)
		print(dataemail[0])
		print(datapass[0])

		if len(dataemail[0]) != 0 and len(datapass[0]) != 0:
			if (datapass[0][3] == email):
				session['info'] = registro
				#return render_template('docentes/menuD.html')
				return redirect(url_for('docente.menu'))
			else:
				flash('Datos Incorrectos')		
		else :
			flash('Datos Incorrectos')
	return redirect(url_for('inicio.inicioSesion'))

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
		img = '/static/directivos/img/0.png'
		registro = [nombre, apellido, idnum, email, password, img]
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
									(nombre,apellido,email,idnum,password,img))
				mysql.connection.commit()
				cur.close()
				print(registro)
				#creo la session
				session['info'] = registro
				if 'info' in session:
					info = session['info']
					print('session')
					print(info)
				return redirect(url_for('indexDocente'))
				flash('Datos registrados Exitosamente')
			else:
				flash('Verifique la contraseña')
		else:
			flash('Datos ya registrados')

	return redirect(url_for('inicio.registroDocente'))

# ------- Docente ------
@app.route('/indexDocente')
def indexDocente():
	#traigo la info de la session
	if 'info' in session:
		info = session['info']
		print(info)
	print('registro !!!!!')
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

@app.route('/guardarAvatar', methods=['POST', 'GET'])
def guardarAvatar():
	if request.method == 'POST':
		if 'info' in session:
			info = session['info']

		avatar = request.form['imageen']
		iid = info[2]
		cur = mysql.connection.cursor()
		cur. execute(""" UPDATE docente SET avatar_docente = %s WHERE num_id_docente = %s""",
						(avatar,iid,))
		mysql.connection.commit()

		cur.execute("""SELECT nombre_docente,apellido_docente,num_id_docente,correo_docente,contrasena_docente,avatar_docente FROM docente WHERE num_id_docente = %s""",
						(iid,))
		print('consulta')
		datanew = cur.fetchall()
		print(datanew)
		

		print('abrir sesion')	
		#creo la session
		session['info'] = datanew[0]
	return redirect(url_for('docente.perfil'))

@app.route('/editPerfil', methods=['POST', 'GET'])
def editPerfil():
	if request.method == 'POST':
		if 'info' in session:
			info = session['info']

		iidnum = info[2]
		session.pop('info')

		print('id de la sesion')
		print(iidnum)
		name = request.form['nombre']
		apellido = request.form['apellido']
		idd = request.form['id']
		email = request.form['email']
		password = request.form['password']
		newData = [name,apellido,idd,email,password,info[5]]
		cur = mysql.connection.cursor()
		cur.execute(""" UPDATE docente 
						SET nombre_docente = %s,
							apellido_docente = %s,
							correo_docente = %s,
							contrasena_docente = %s,
							num_id_docente = %s
						WHERE num_id_docente = %s """,
						(name,apellido, email, password, idd, iidnum,))
		mysql.connection.commit()
		#creo la session
		session['info'] = newData
	return redirect(url_for('docente.perfil'))

@app.route('/registroMateria', methods=['POST', 'GET'])
def registroMateria():
	if request.method == 'POST':
		if 'info' in session:
			info = session['info']

		img = request.form['imageen']
		name = request.form['nameMateria']
		print(name)
		iid = info[2]
		materiaaa = random.randint(100, 100000)
		materiaa = 'Asignatura creada, \n Su código es: ' + str(materiaaa)
		session['idMateria'] = materiaaa

		cur = mysql.connection.cursor()
		cur.execute("""SELECT id_docente FROM docente WHERE num_id_docente = %s """,
						(iid,))
		data =	cur.fetchall()
		print(data)
		iid = data[0]
		cur.execute('INSERT INTO materia (id_materia, nombre_materia, id_docente, imgMateria) VALUES (%s,%s,%s,%s)', 
									(materiaaa,name,iid,img))
		mysql.connection.commit()
		cur.close()
		flash(materiaa)
	return render_template('docentes/crear_asignatura.html')

@app.route('/cargarcursos', methods=['POST', 'GET'])
def cargarcursos():
	if request.method == 'POST':
		if 'info' in session:
			info = session['info']
		iid = info[2]
		
		cur = mysql.connection.cursor()
		cur.execute("""SELECT id_docente FROM docente WHERE num_id_docente = %s """,
						(iid,))
		data =	cur.fetchall()	
		iid = data[0]
		cur.execute("""SELECT id_materia, nombre_materia, imgMateria FROM materia WHERE id_docente = %s """,
						(iid,))
		dataa =	cur.fetchall()	
		print (dataa)
	return render_template('docentes/listaDocentes.html', data = dataa)

if __name__ == '__main__':
	app.run(debug = True)