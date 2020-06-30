from rest_framework import viewsets
from articles.models import Articles
from .serializers import ArticlesSerializer



class ArticleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ArticlesSerializer
    queryset = Articles.objects.all()


# from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView,DestroyAPIView,UpdateAPIView

# class ArticlesListView(ListAPIView):
#     queryset = Articles.objects.all()
#     serializer_class=ArticlesSerializer


# class ArticlesDetailView(RetrieveAPIView):
#     queryset = Articles.objects.all()
#     serializer_class=ArticlesSerializer

# class ArticlesCreateView(CreateAPIView):
#     queryset = Articles.objects.all()
#     serializer_class=ArticlesSerializer

# class ArticlesUpdateView(UpdateAPIView):
#     queryset = Articles.objects.all()
#     serializer_class=ArticlesSerializer

# class ArticlesDeleteView(DestroyAPIView):
#     queryset = Articles.objects.all()
#     serializer_class=ArticlesSerializer



