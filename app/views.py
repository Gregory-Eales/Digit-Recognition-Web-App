from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    return render(request, "app/index.html")

def save_image(request):
    img = Canvas(name=request.POST.get('canvas'))
    img.save()
