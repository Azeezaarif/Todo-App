Data persistence (back-end)

Coded in Flask, it is a full-stack Python framework and provides developers with flexibility in application structuring. It has a large community of users, due to its ease of use.

Used SQLite for database creation as this is a small test program. With SQLite DB, the data is stored in a single .db file.

UI (front-end) 

Used HTML with Bootstrap 4 for easy design and styling. Got the skeleton html file from ChatGPT to speed-up development. chatGPT suggested adding a CSS file but I chose Bootstrap because it's easier. Bootstrap CSS framework is free and open-source, it is very easy to use and understand.

Javascript is used to handle dynamic actions. It is one of the most popular languages and has many inbuild methods and functions. 
For example, 
The addEventListener allows me to dynamically control the application. 
 - On 'Add Task', I send a post request to save the task.
 - On the close icon click, I find the nearest tr element of the 'remove' class and delete it in UI, and set historic to true in DB.
map() method, I used this to create the task table in one easy step.
I use fetch() methods to get/update/delete data from the back-end API.
