from django.contrib import admin
from .models import Service, Booking
from .models import Devis

admin.site.register(Service)
admin.site.register(Booking)
admin.site.register(Devis)
