from rest_framework import viewsets
from .models import Service, Booking
from .serializers import ServiceSerializer, BookingSerializer
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.core.mail import send_mail
from django.conf import settings

def home(request):
    return HttpResponse("<h1>Bienvenue sur KITOKO-SERVICE!</h1><p>Le site est en cours de construction.</p>")

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

@csrf_exempt
def handle_devis(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            phone = data.get('phone')
            message = data.get('message')

             # Logique pour envoyer l'email
            subject = f"Nouvelle demande de devis de {name}"
            message_body = f"Nom: {name}\nEmail: {email}\nTéléphone: {phone}\nMessage: {message}"
            from_email = settings.DEFAULT_FROM_EMAIL
            to_email = [settings.DEFAULT_FROM_EMAIL]  # L'email où tu veux recevoir la demande

            send_mail(subject, message_body, from_email, to_email)

            print(f"Nouvelle demande de devis reçue : {name}, {email}, {phone}, {message}")

            return JsonResponse({'message': 'Demande de devis reçue avec succès !'}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)
