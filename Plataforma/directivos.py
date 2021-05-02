from flask import Flask, render_template
directivo = Flask(__name__)

@directivo.route('/')
def index():
	return render_template('directivos/inicio.html')

@directivo.route('/perfil')
def perfil():
	return render_template('directivos/perfil.html')
@directivo.route('/foto')
def foto():
	return render_template('directivos/foto.html')

@directivo.route('/menu')
def menu():
	return render_template('directivos/menuD.html')
@directivo.route('/cursos')
def cursos():
	return render_template('directivos/cursos.html')
@directivo.route('/principal')
def principal():
	return render_template('directivos/principal.html')
@directivo.route('/crear_cursos')
def crear_cursos():
	return render_template('directivos/crear_cursos.html')
@directivo.route('/crear_asignaturas')
def crear_asignaturas():
	return render_template('directivos/crear_asignatura.html')
@directivo.route('/listaDocentes')
def listaDocentes():
	return render_template('directivos/listaDocentes.html')
@directivo.route('/buscar_cursos')
def buscar_cursos():
	return render_template('directivos/buscar_cursos.html')
@directivo.route('/docentes')
def docentes():
	return render_template('directivos/docentes.html')
@directivo.route('/estudiantes')
def estudiante():
	return render_template('directivos/estudiantes.html')

@directivo.route('/servicios')
def servicios():
	return render_template('directivos/estadisticaServicios.html')
@directivo.route('/crear')
def crear():
	return render_template('directivos/crear.html')
@directivo.route('/construcion')
def construcion():
	return render_template('directivos/construccion.html')


if __name__ == '__main__':
	directivo.run( port = 3000, debug = True)