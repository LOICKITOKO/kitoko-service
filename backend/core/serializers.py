from rest_framework import serializers
from .models import Service
from .models import Booking

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'name', 'description', 'icon']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'service', 'date', 'client_name', 'client_email']
