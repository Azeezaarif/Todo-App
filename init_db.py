import sqlite3

connection = sqlite3.connect('database.db')


with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO task (name, historic) VALUES (?, ?)", ('Set Alarm', 'f'))

cur.execute("INSERT INTO task (name, historic) VALUES (?, ?)", ('Make Food', 'f'))

connection.commit()
connection.close()
