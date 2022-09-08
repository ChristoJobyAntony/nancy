#!/bin/sh
poetry run gunicorn app:app -b localhost:5002 --workers 5 --timeout 400 --env SCRIPT_NAME=/nancy 
