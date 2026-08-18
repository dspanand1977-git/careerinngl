from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Inquiry
from .serializers import InquirySerializer


@api_view(['POST'])
def create_inquiry(request):
    serializer = InquirySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({
            'message': 'Inquiry saved successfully',
            'data': serializer.data
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def inquiry_list(request):
    inquiries = Inquiry.objects.all()
    serializer = InquirySerializer(inquiries, many=True)
    return Response(serializer.data)
