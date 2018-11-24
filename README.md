Mongo Broker
=================
Mongo Broker creates a RESTful API MongoDB Broker for your lovely fetch requests. To add your mongo database, in the .env file include your MongoDB SRV connection string as "mongoURI." Example: 
```
mongoURI=mongodb+srv://<USER>:<PASSWORD>@console-uk17x.gcp.mongodb.net/test?retryWrites=true
```
and to accept your fetch requests, include a client auth token in your .env file as the following:
```
AUTHKEY=<Some random digits>
```
  Than in your fetch requests include the header:
```
  {
    Authorization: <Authkey>
  }
```
To retrieve documents, use a GET request, with the query parameters acting as the filter. Example: 
```
  https://mongo-broker.glitch.me/sampleDatabase/users?fname=Tom&lname=Tommerson
```
The above query would return Tom Tommerson's record.

The query parameters also work for the PATCH and PUT methods.

POST, PATCH, and PUT use the body as the write/overwrite.

Crafted by Patrick Trester