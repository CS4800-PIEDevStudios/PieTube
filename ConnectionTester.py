import mysql.connector

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

for x in result:
	print(x)

# Close connection
cnx.close()