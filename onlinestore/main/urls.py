from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views  as auth_views
from .forms import LoginForm



urlpatterns = [
    path('login/',auth_views.LoginView.as_view(template_name = 'index.html', authentication_form = LoginForm), name = 'login'),
    path('register/', views.registration, name='register'),
    
    
]


if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
