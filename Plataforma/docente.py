import flask
from flask import render_template
from flask import session



docente = flask.Blueprint('docente', __name__)

def dataSession():
	#traigo la info de la session
	if 'info' in session:
		info = session['info']
		print(info)
	return info
	
@docente.route('/perfil')
def perfil():
	info = dataSession()
	return render_template('docentes/perfil.html', data=info)



@docente.route('/menu')
def menu():
	#traigo la info de la session
	if 'info' in session:
		infa = session['info']
	else:
		return render_template('principal/index.html')
	info = dataSession()
	name = info[0]
	apellido = info[1]
	datos = [name, apellido]
	return render_template('docentes/menuD.html', data=datos)

@docente.route('/cursos')
def cursos():
	return render_template('docentes/cursos.html')
@docente.route('/principal')
def principal():
	return render_template('docentes/principal.html')
@docente.route('/crear_cursos')
def crear_cursos():
	return render_template('docentes/crear_cursos.html')
@docente.route('/crear_asignaturas')
def crear_asignaturas():
	name = '111235'
	return render_template('docentes/crear_asignatura.html', nombre = name)
@docente.route('/listaDocentes')
def listaDocentes():
	return render_template('docentes/listaDocentes.html')
@docente.route('/buscar_cursos')
def buscar_cursos():
	return render_template('docentes/buscar_cursos.html')
@docente.route('/docentes')
def docentes():
	return render_template('docentes/docentes.html')
@docente.route('/estudiantes')
def estudiante():
	return render_template('docentes/estudiantes.html')

@docente.route('/servicios')
def servicios():
	return render_template('docentes/estadisticaServicios.html')
@docente.route('/crear')
def crear():
	return render_template('docentes/crear.html')
@docente.route('/construcion')
def construcion():
	return render_template('docentes/construccion.html')


