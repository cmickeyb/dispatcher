#!/usr/bin/python

from distutils.core import setup

setup(name='OpenSimRemoteControl',
      version='1.1',
      author='Mic Bowman',
      author_email='cmickeyb@gmail.com',
      py_modules=['OpenSimRemoteControl'],
      url='http://github.com',
      scripts=['scripts/simprobe.py', 'scripts/simauth.py', 'scripts/simcontrol.py'],
      )
