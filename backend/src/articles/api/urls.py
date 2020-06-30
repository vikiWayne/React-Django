from django.urls import path

''' from .views import ArticlesListView,ArticlesDetailView,ArticlesCreateView,ArticlesUpdateView,ArticlesDeleteView

urlpatterns = [
    path('',ArticlesListView.as_view()),
    path('create',ArticlesCreateView.as_view()),
    path('<pk>/delete',ArticlesDeleteView.as_view()),
    path('<pk>/update',ArticlesUpdateView.as_view()),
    path('<pk>',ArticlesDetailView.as_view()),
] '''



#'articles' is the app...
#(r'path name',...) is the url..and 'base name' is the 'app name'..
from articles.api.views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ArticleViewSet, basename='articles')
urlpatterns = router.urls
