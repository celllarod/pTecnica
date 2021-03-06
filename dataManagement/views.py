# Create your views here.
from django.http import request, HttpResponse
from django.shortcuts import render

from .models import Monitoring


def index(request):
    """
    Función vista para la página inicio del sitio.
    """

    return render(
        request,
        'index.html'
    )


def data(request):
    """
    Función vista para la página que muestra los datos eléctricos en forma de tabla.
    """

    return render(
        request,
        'data.html'
    )


def dataForm(request):
    """
    Función vista para la página que muestra un formulario para crear/actualizar medida.
    """

    return render(
        request,
        'dataForm.html'
    )

