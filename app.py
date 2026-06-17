from flask import Flask, render_template, jsonify, send_from_directory
import os
import sys

print("=" * 50)
print(f"🌸 Запуск ніжної сторінки для Крістини!")
print(f"📁 Поточна директорія: {os.getcwd()}")
print("=" * 50)

app = Flask(__name__,
            static_folder='static',
            template_folder='templates')

# Секретні фото
SECRET_FILES = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg']

@app.route('/')
def index():
    try:
        return render_template('index.html')
    except Exception as e:
        return f"Помилка: {e}", 500

@app.route('/api/secret-images')
def get_secret_images():
    return jsonify(SECRET_FILES)

@app.route('/health')
def health():
    return 'OK', 200

@app.route('/test')
def test():
    return '''
    <!DOCTYPE html>
    <html>
    <head><title>Тест</title></head>
    <body style="background: #fce4ec; color: #880e4f; text-align: center; padding: 50px; font-family: 'Georgia', serif;">
        <h1>🌸 Сайт працює!</h1>
        <p style="color: #d81b60;">З Днем Народження, Крістино!</p>
        <p>PORT: ''' + os.environ.get('PORT', '5000') + '''</p>
    </body>
    </html>
    '''

if __name__ != "__main__":
    pass
else:
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)