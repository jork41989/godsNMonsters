"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import include, url
from django.urls import path, include                 
from rest_framework import routers
from tours import views as toursView
from times import views as timesView


router = routers.DefaultRouter()
router.register(r'tours', toursView.ToursView, 'tours')
router.register(r'timesBack', timesView.TimesView, 'timesBackView')
router.register(r'times', timesView.TimesCustomerView, 'timesView')

urlpatterns = [
    path('admin/', admin.site.urls),         path('api/', include(router.urls)),
    path('api/auth/', include('accounts.urls')),
]
