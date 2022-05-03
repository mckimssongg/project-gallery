from django.urls import path, include
from . import views


urlpatterns = [
    path('users/', views.UserView.as_view()),
    path('users/login', views.LoginView.as_view(), name='login'),
    # path('users/logout', users_views.logout_view , name='logout'),
    path('users/signup', views.SingUpView.as_view() , name='signup'),
]

