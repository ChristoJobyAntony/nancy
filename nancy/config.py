import os

class Config (object) :
    # Falsk Configs
    SECRET_KEY = "Not_an_AmazonN_CopY"
    TEMPLATES_AUTO_RELOAD = True
    BASE_URL = "http://christojobyantony.zapto.org:5000"

    MAX_CONTENT_LENGTHs = 4 * 1024 * 1024 #4mb max file size

    # MySQL CONfigurations
    MYSQL_USER = 'christo'
    MYSQL_PASSWORD = 'Tons2003'
    MYSQL_DATABASE = 'nancy'

    # Falsk-mail Configs 
    MAIL_SERVER = 'smtp.elasticemail.com'
    MAIL_PORT = 2525
    MAIL_USERNAME = 'support.nancy@protonmail.com'
    MAIL_PASSWORD = '7E4A7786C49E690E6AFBD690431E9582AE57'
    MAIL_USE_TLS = True
    MAIL_USE_SSL = False
        # Falsk-mail Configs 
    # MAIL_SERVER = 'smtp.elasticemail.com'
    # MAIL_PORT = 2525
    # MAIL_USERNAME = 'nancy.support@hexoid.com'
    # MAIL_PASSWORD = '8BE0982BC5E4217C49491B3C715DC052D7AB'
    # MAIL_USE_TLS = True
    # MAIL_USE_SSL = False

    # Path Configs
    UPLOAD_FOLDER = "/home/christo/Code/Nancy/nancy/media"
    THUMBNAILS_FOLDER = os.path.join(UPLOAD_FOLDER, "shop/thumbnails")
    SELLER_PROFILE_FOLDER = os.path.join(UPLOAD_FOLDER, "seller/profile_pictures")
    SELLER_COVER_FOLDER = os.path.join(UPLOAD_FOLDER, "seller/store_cover")
    USER_PROFILE_FOLDER = os.path.join(UPLOAD_FOLDER, "user/profile_pictures")
    BANNERS_FOLDER = os.path.join(UPLOAD_FOLDER, "shop/banners")
