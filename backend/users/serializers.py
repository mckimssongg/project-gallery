from rest_framework import serializers
from django.contrib.auth import authenticate, password_validation
from .models import *
from rest_framework.authtoken.models import Token
from rest_framework.validators import UniqueValidator


'''
{
    "username":"srgato",
    "email": "srgato@gmail.com",
    "first_name":"garfrield",
    "last_name": "xd",
    "password": "gato1234",
    "password_confirmation":"gato1234"
}
'''

class SingUpSerializer(serializers.Serializer):
    username = serializers.CharField(max_length = 255 , validators = [UniqueValidator(queryset = User.objects.all())])
    email = serializers.EmailField(max_length = 255, validators = [UniqueValidator(queryset = User.objects.all())])
    first_name = serializers.CharField(max_length = 255)
    last_name = serializers.CharField(max_length = 255)
    password = serializers.CharField(max_length = 255)
    password_confirmation = serializers.CharField(max_length = 255)

    def validate(self, data):
        password = data.get('password')
        password_confirmation = data.get('password_confirmation')
        if password != password_confirmation:
            raise serializers.ValidationError('Las contraseñas no coinciden')
        password_validation.validate_password(password)
        return data

    def create(self, data):
        data.pop('password_confirmation')
        user = User.objects.create_user(**data)
        return user

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255)
    password = serializers.CharField(max_length=128, write_only=True)
    
    def validate(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise serializers.ValidationError("El usuario no existe")
        self.context['user'] = user
        return data

    def create (self, validated_data):
        token, created = Token.objects.get_or_create(user=self.context['user'])
        return self.context['user'], token.key


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        user = super().create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
    
    def update(self, instance, validated_data):
        update_user = super().update(instance, validated_data)
        update_user.set_password(validated_data['password'])
        update_user.save()
        return update_user

class UserListSerializer(serializers.ModelSerializer):
    '''
    serializador para listar 
    '''
    class Meta:
        model = User
        fields = '__all__'

    def to_representation(self, instance):
        # data  = super().to_representation(instance)
        # print(data)
        return {
            'id': instance.id,
            'username': instance.username,
            'fullName' : instance.first_name + ' ' + instance.last_name,
            'email': instance.email,
        }


