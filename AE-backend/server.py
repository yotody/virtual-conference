import os
import ssl
from http.server import HTTPServer
from django.core.wsgi import get_wsgi_application
from wsgiref.simple_server import WSGIServer, WSGIRequestHandler

os.environ['DJANGO_SETTINGS_MODULE'] = 'emsbackend.settings'  # Replace 'your_project_name' with your actual project name

application = get_wsgi_application()

class SSLWSGIServer(WSGIServer):
    def __init__(self, server_address, HandlerClass):
        super().__init__(server_address, HandlerClass)
        self.socket = ssl.wrap_socket(
            self.socket,
            server_side=True,
            certfile='cert.pem',
            keyfile='key.pem',
            ssl_version=ssl.PROTOCOL_TLS,
        )

def run():
    server_address = ('10.240.72.42', 8000)
    httpd = SSLWSGIServer(server_address, WSGIRequestHandler)
    httpd.set_app(application)
    print(f"Serving on https://10.240.72.42:8000")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
