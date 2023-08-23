from flask import Flask, render_template

from config import config

app = Flask(__name__)

app.static_folder = 'static'


@app.route('/')
def home():
    return render_template('auth/home.html')


@app.route('/faqs')
def faqs():
    return render_template('auth/faqs.html')


@app.route('/funds')
def funds():
    return render_template('auth/funds.html')


@app.route('/thefirm')
def thefirm():
    return render_template('auth/thefirm.html')


@app.route('/team')
def team():
    return render_template('auth/team.html')


@app.route('/invest')
def invest():
    return render_template('auth/invest.html')


if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.run()
