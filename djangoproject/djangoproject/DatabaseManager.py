from django.db import connection

def fetchData(query):
    with connection.cursor() as cursor:
        
        # Execute the query
        cursor.execute(query)
        
        # Fetch column names from cursor.description
        columns = [col[0] for col in cursor.description]
        
        # Fetch all rows and convert them to dictionaries
        results = []
        for row in cursor.fetchall():
            results.append(dict(zip(columns, row)))
        
    return results

def insertData(query):
    with connection.cursor() as cursor:
        
        # Execute the query
        cursor.execute(query)
        print("Inserted data results: " + str(cursor.fetchall()))