import flask

def url_for(endpoint, **values):
    url = flask.url_for(endpoint, **values)
    print("called")
    # if not values.get('_external', False):
    url = '/nancy' + url
    return url
