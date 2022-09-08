import json
import os

class Config (object) :
    file = open("./nancy/config.json")
    configs = json.load(file)
    # Falsk Configs
    SECRET_KEY = configs['SECRET_KEY']
    TEMPLATES_AUTO_RELOAD = True
    BASE_URL = "http://christojobyantony.zapto.org:5000"

    MAX_CONTENT_LENGTHs = 4 * 1024 * 1024 #4mb max file size

    # MySQL CONfigurations
    MYSQL_USER = configs['MYSQL_USER']
    MYSQL_PASSWORD = configs['MYSQL_PASSWORD']
    MYSQL_DATABASE = configs['MYSQL_DATABASE']

    # Falsk-mail Configs 
    MAIL_SERVER = configs['MAIL_SERVER']
    MAIL_PORT = configs['MAIL_PORT']
    MAIL_USERNAME = configs['MAIL_USERNAME']
    MAIL_PASSWORD = configs['MAIL_PASSWORD']
    MAIL_USE_TLS = configs['MAIL_USE_TLS']
    MAIL_USE_SSL = configs['MAIL_USE_SSL']
        # Falsk-mail Configs 
    # MAIL_SERVER = 'smtp.elasticemail.com'
    # MAIL_PORT = 2525
    # MAIL_USERNAME = 'nancy.support@hexoid.com'
    # MAIL_PASSWORD = '8BE0982BC5E4217C49491B3C715DC052D7AB'
    # MAIL_USE_TLS = True
    # MAIL_USE_SSL = False

    # Path Configs
    UPLOAD_FOLDER = configs['UPLOAD_FOLDER']
    THUMBNAILS_FOLDER = os.path.join(UPLOAD_FOLDER, "shop/thumbnails")
    SELLER_PROFILE_FOLDER = os.path.join(UPLOAD_FOLDER, "seller/profile_pictures")
    SELLER_COVER_FOLDER = os.path.join(UPLOAD_FOLDER, "seller/store_cover")
    USER_PROFILE_FOLDER = os.path.join(UPLOAD_FOLDER, "user/profile_pictures")
    BANNERS_FOLDER = os.path.join(UPLOAD_FOLDER, "shop/banners")
