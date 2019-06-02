import urllib
from imdb import IMDb

oa=IMDb()

thematrix=oa.get_movie('0133093')
print(thematrix['director'])
