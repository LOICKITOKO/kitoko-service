from django.db import models
from django.core.validators import RegexValidator

class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Correct
    icon = models.ImageField(upload_to='service_icons/')  # Correct, assure-toi que MEDIA_URL est bien configuré dans settings.py

    def __str__(self):
        return self.name
class Booking(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField()

class Devis(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Devis de {self.name}"

    # Validation du format du numéro de téléphone
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Le numéro de téléphone doit être valide.")
    customer_phone = models.CharField(max_length=15, validators=[phone_regex])
    
    address = models.TextField()
    date = models.DateField()  # Si tu veux une date uniquement
    time = models.TimeField()  # Si tu veux une heure uniquement

    # Alternative : Si tu préfères combiner la date et l'heure dans un seul champ
    # datetime = models.DateTimeField()

    def __str__(self):
        return f"{self.customer_name} - {self.service.name}"
