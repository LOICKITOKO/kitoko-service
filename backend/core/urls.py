# core/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, BookingViewSet
from .views import home

# Créer un routeur pour les ViewSets
router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'bookings', BookingViewSet)

# Ajouter les URLs générées par le routeur à la liste des URLs de l'application
urlpatterns = [
    path('', home, name='home'),  # La route pour la page d'accueil
    path('api/', include(router.urls)),  # Les API seront accessibles sous /api/services et /api/booking
]
