from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

from .models import Post, Member
from .serializers import PostSerializer, MemberSerializer

# class ListPost(generics.ListCreateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

# class DetailPost(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

class MemberList(APIView):
    def get(self, request):
        members = Member.objects.all()
        serializer = MemberSerializer(members, many = True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = MemberSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

class MemberDetail(APIView):
    def get_object(self, pk):
        try:
            return Member.objects.get(pk = pk)
        except Member.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        member = self.get_object(pk)
        serializer = MemberSerializer(member)
        return Response(serializer.data)

    def put(self, request, pk, format = None):
        member = self.get_object(pk)
        serializer = MemberSerializer(member, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format = None):
        member = self.get_object(pk)
        member.delete()
        return Response(Status = status.HTTP_204_NO_CONTENT)
