from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def hello_api(req):
    return Response({"message":"Hello from Django API"})