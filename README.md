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
***
## The specifications for this sprint were:

 - [x] Users can create to do list items.
 
 - [x] Users can delete unwanted to do list items.
 
 - [x] Users can check items off as completed.
 
 - [x] Users can edit the text on existing to do list items.
 
 - [x] UI renders to do items differently when they are completed (using a checkbox or some other indicator).
 
 - [x] When an error occurs, the user is notified with modal message.*
 
 - [x] Backend uses Node.js and Express.
 
 - [x] App persists to do list items in a database.
 
 - [x] Code uses a linter and there are no linting errors.
 
 - [x] There are thorough tests for all functionality involved in interacting with the database.
 
 - [x] There are tests for creating to do list items.
 
 - [x] There are tests for deleting to do list items.
 
 - [x] There are tests for completing to do list items.
 
 [x] There are tests for editing to do list items.
 
 [x] All tests are passing.
 
 [x] Repository includes a README file with basic installation and setup.
 
 [x] All dependencies are properly declared in package.json.
 
 [x] All major features are added via pull requests with a clear description and concise commit messages.
 
 [x] Every pull request has been reviewed by at least one other person.
 
 [x] The artifact produced is properly licensed, preferably with the MIT license.






 



