from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import RegisterSerializer
from django.contrib.auth.models import User

@api_view(['GET'])
def hello_api(req):
    return Response({"message":"Hello from Django API"})

@api_view(['POST'])
def register_user(req):
    serializer = RegisterSerializer(data = req.data)
    if serializer.is_valid():
        serializer.save() #saves user 
        return Response({"message":"User Registered Successfully!"}, status = status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def basic_login(req):
    username = req.data.get('username')
    password = req.data.get('password')

    try:
        user = User.objects.get(username=username, password=password)
        return Response({"message":"Login Successful"}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"message":"user not exist"},status=status.HTTP_400_BAD_REQUEST)