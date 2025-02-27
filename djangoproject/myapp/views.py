from django.shortcuts import render
from django.http import JsonResponse
import mysql.connector




def getMovieData(request):
	# Connect to server
	cnx = mysql.connector.connect(
		host="pietube-database.cwl0gw24qtjq.us-east-1.rds.amazonaws.com",
		port=3306,
		user="admin",
		password="OvCCanRNLvBjdfiKUt3I")

	# Get a cursor
	cur = cnx.cursor(dictionary=True)

	cur.execute("SELECT * FROM PieTube.Movie")

	result = cur.fetchall()

	cnx.close()
	cur.close()

	print(result)

	return JsonResponse(result, safe=False)

def getUserData(request):
	# Connect to server
	cnx = mysql.connector.connect(
		host="pietube-database.cwl0gw24qtjq.us-east-1.rds.amazonaws.com",
		port=3306,
		user="admin",
		password="OvCCanRNLvBjdfiKUt3I")

	# Get a cursor
	cur = cnx.cursor(dictionary=True)

	cur.execute("SELECT * FROM PieTube.User")

	result = cur.fetchall()

	cnx.close()
	cur.close()

	print(result)

	return JsonResponse(result, safe=False)