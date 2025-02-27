import mysql.connector


# Returns the singleton connection to the database
def getDatabaseConnection():
    return cnx

def resetDatabaseConnection():
    cnx = mysql.connector.connect(
		host="pietube-database.cwl0gw24qtjq.us-east-1.rds.amazonaws.com",
		port=3306,
		user="admin",
		password="OvCCanRNLvBjdfiKUt3I")
    return cnx