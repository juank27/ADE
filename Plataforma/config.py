class Config(object):
	SECRET_KEY = "mysecretkey"

class DevelopmentConfig(Config):
	#Config BDD
	MYSQL_HOST =	'127.0.0.1'
	MYSQL_USER =	'root'
	MYSQL_PASSWORD =	''
	MYSQL_DB = 'prueba'
	#Config Mail
	MAIL_SERVER = 'smtp.gmail.com'
	MAIL_PORT = 465
	MAIL_USERNAME = "adeplataforma@gmail.com"
	MAIL_PASSWORD = "ADE123456"
	MAIL_USE_TLS = False
	MAIL_USE_SSL = True