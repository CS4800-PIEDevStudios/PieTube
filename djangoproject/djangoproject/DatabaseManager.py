from django.db import connection

def fetchData(query, params=None):
    with connection.cursor() as cursor:
        cursor.execute(query, params)  # Prevent SQL injection
        columns = [col[0] for col in cursor.description]
        results = [dict(zip(columns, row)) for row in cursor.fetchall()]
    return results

def insertData(query):
    with connection.cursor() as cursor:
        
        # Execute the query
        cursor.execute(query)
        print("Inserted data results: " + str(cursor.fetchall()))