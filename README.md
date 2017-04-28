# Taskr
***
## The only todo app you'll ever need.
###### (The one you may want is a different story)
### Enter the things you plan to do, and simply click them when you're done. 
# Go from to-do, to to-done!

***
# Motivation
### Taskr was designed with you in mind; life is complicated enough, let us help you simplify...
## Get Taskr and getr done.

***
# Technology Used
##  Built with:
 + NodeJS
 + ExpressJS
 + PostgreSQL 
 + Materialize
 
 ***
# Installation Instructions
### To run this app successfully, you must have PostgreSQL installed. You can run the brew installation command:
    $ brew install postgresql
### If this is your first time installing Postgres with Homebrew, you'll need to create a database with the following command in your terminal/ commandline:
    $ initdb /usr/local/var/postgres -E utf8
### If you're in your project directory, you can run postgres and create the project database:
    $ psql
### You will then see your username set equal to the poundsign. It should look like the following:
    waynebanks=#
### You, then need to run the following to create your 'taskr' database:
    CREATE DATABASE dbname;
### At this point, you should have already done a pull from the master branch and done and NPM install.
    $ git pull
### then...
    $ npm install
### You can now run your server with:
    $ nodemon app
### If this worked correctly, you should see:
    [nodemon] 1.11.0
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching: *.*
    [nodemon] starting `node app app.js`
    taskr is listening on port 3001!
### Navigate to localhost:3001 and go from to-do to to-done with taskr...
    http://localhost:3001/



 



