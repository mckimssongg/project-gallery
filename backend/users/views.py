
from  rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.serializers import AuthTokenSerializer

from .serializers import UserLoginSerializer, UserListSerializer, SingUpSerializer

class SingUpView(APIView):
    '''
    View para registrar un usuario
    '''
    def post(self, request, *args, **kwargs):
        serializer = SingUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        data = {
            'status': True,
            'user': UserListSerializer(user).data,
        }

        return Response(data, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    '''
    Clase para el login de usuarios
    '''

    def post(self, request, *args, **kwargs):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.save()
        data = {
            'user': UserListSerializer(user).data,
            'token': token,
            'auth': True
        }
        return Response(data, status=status.HTTP_201_CREATED)


class UserView(APIView):
    def get(self, request):
        print(request.query_params)
        return Response({'msg': 'Hello World'})

    def post(self, request):
        print(request.data)
        return Response({'msg': 'Register'})