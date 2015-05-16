#!/usr/bin/python

import tornado.web
import tornado.ioloop
import tornado.gen
import time

class SyncHandler(tornado.web.RequestHandler):

	def get(self):
		time.sleep(1)
		self.write('OK.')

class AsyncHandler(tornado.web.RequestHandler):

	@tornado.gen.coroutine
	def get(self):
		yield tornado.gen.sleep(1) # requires Tornado 4.1
		self.write('OK.')

application = tornado.web.Application([
	(r"/test_sync", SyncHandler),
	(r"/test_async", AsyncHandler),
])

def main():
	application.listen(8888)
	tornado.ioloop.IOLoop.instance().start()

if __name__ == '__main__':
	STATUS = main()