# app/routes.py
import sqlite3
from app import app
from flask import Flask, request, jsonify

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
@app.route('/tasks')
def getTask():
    conn = get_db_connection()
    rows = conn.execute('SELECT id, name FROM task WHERE historic is false').fetchall()
    returnlist = [dict(id=row[0], task=row[1]) for row in rows]
    return jsonify(returnlist)

@app.route('/task', methods = ['POST'])
def addTask():
    name = request.json.get('name')
    conn = get_db_connection()
    row = conn.execute("INSERT INTO task (name, historic) VALUES (?, ?)", (name, 'f')).lastrowid
    conn.commit()
    result = { 'response': row }
    return jsonify(result)

@app.route('/task/<int:id>', methods=['DELETE'])
def removeTask(id):
    conn = get_db_connection()
    conn.execute("UPDATE task SET historic = true WHERE id = ?", str(id))
    conn.commit()
    msg = "Task " + str(id) + " has been removed."
    result = { 'response': msg }
    return jsonify(result)