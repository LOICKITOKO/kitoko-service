from rest_framework import viewsets
from .models import Service, Booking
from .serializers import ServiceSerializer, BookingSerializer
from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Bienvenue sur KITOKO-SERVICE!</h1><p>Le site est en cours de construction.</p>")

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
