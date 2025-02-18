from django.shortcuts import render
from django.http import JsonResponse
import mysql.connector



# Create your views here.
def index(request):
	# Connect to server
	cnx = mysql.connector.connect(
		host="pietube-database.cwl0gw24qtjq.us-east-1.rds.amazonaws.com",
		port=3306,
		user="admin",
		password="OvCCanRNLvBjdfiKUt3I")

	# Get a cursor
	cur = cnx.cursor()

	cur.execute("SELECT * FROM PieTube.Student")

	result = cur.fetchall()
	string = ""
	for x in result:
		string += str(x) + "\n"

	# Close connection
	cnx.close()

	return JsonResponse(string, safe=False)