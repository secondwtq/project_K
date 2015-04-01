#coding=utf-8

import tornado
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from tornado.options import define, options
define("port", default=8888, type=int)

class TestHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello Tornado!")

App = tornado.web.Application(handlers=[
    (r"/test", TestHandler)
])

if __name__ == "__main__":
    tornado.options.parse_command_line()
    server = tornado.httpserver.HTTPServer(App)
    server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()

