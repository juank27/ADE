import flask
from flask import render_template
docente = flask.Blueprint('docente', __name__)

@docente.route('/inicioDocente')
def index():
	return render_template('docentes/inicio.html')

@docente.route('/perfil')
def perfil():
	return render_template('docentes/perfil.html')
@docente.route('/foto')
def foto():
	return render_template('docentes/foto.html')

@docente.route('/menu')
def menu():
	return render_template('docentes/menuD.html')
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
	name = 'juan Ruiz'
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

