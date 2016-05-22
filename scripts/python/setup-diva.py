#!/usr/bin/python

from setuptools import setup, find_packages

setup(name='OpenSimRemoteControl',
      version='1.0',
      author='Mic Bowman',
      author_email='cmickeyb@gmail.com',
      py_modules=['OpenSimRemoteControl'],
      url='http://github.com/cmickeyb/dispatcher',
      scripts=['scripts/simprobe.py', 'scripts/simauth.py', 'scripts/simcontrol.py'],
      # Choose your license
      license='BSD',
      classifiers=[
        # How mature is this project? Common values are
        #   3 - Alpha
        #   4 - Beta
        #   5 - Production/Stable
        'Development Status :: 3 - Alpha',

        # Indicate who your project is intended for
        'Intended Audience :: Developers',

        # Pick your license as you wish (should match "license" above)
        'License :: OSI Approved :: BSD License',

        # Specify the Python versions you support here. In particular, ensure
        # that you indicate whether you support Python 2, Python 3 or both.
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
        ]

      )
