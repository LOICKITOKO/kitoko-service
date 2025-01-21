#!/bin/bash

# Lancer le serveur Django
echo "Lancement du serveur Django..."
cd backend
python3 manage.py runserver 0.0.0.0:8000 &

# Lancer le serveur React
echo "Lancement du serveur React..."
cd ../frontend
npm start
