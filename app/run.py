from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, 
           static_folder='build/static',
           template_folder='build')
app.config['SECRET_KEY'] = 'your-secret-key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hotel.db'
app.config['PREFERRED_URL_SCHEME'] = 'https'
db = SQLAlchemy(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/rooms')
def rooms():
    return render_template('rooms.html')

@app.route('/booking', methods=['GET', 'POST'])
def booking():
    if request.method == 'POST':
        # Handle booking form submission
        return redirect(url_for('confirmation'))
    return render_template('booking.html')

def create_build_dir():
    build_dir = os.path.join(app.root_path, 'build')
    if not os.path.exists(build_dir):
        os.makedirs(build_dir)
        os.makedirs(os.path.join(build_dir, 'static'))

if __name__ == '__main__':
    if os.environ.get('VERCEL_ENV') != 'production':
        create_build_dir()
        app.run(debug=True)