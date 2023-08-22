from flask import Flask, render_template

from config import config

app = Flask(__name__)

app.static_folder = 'static'


@app.route('/')
def prueba():
    return render_template('auth/prueba.html')


if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.run()
