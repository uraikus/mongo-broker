Mongo Broker
=================
[GitHub Page](https://github.com/uraikus/mongo-broker)

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

If you send a get request with a query on the \_id, it will always return the document object, otherwise it returns an array of document objects.

The query parameters must be set for the PATCH and PUT methods.

POST, PATCH, and PUT use the body as the write/overwrite.

When sending a POST request, you can send an array of objects to insert several Mongo Documents in one request.

The difference between PUT and PATCH, is that PUT will only update one document and insert a new document if it doesn't already exist. PATCH will update any document that meets the query criteria; therefore if you want to update only one document, but not insert if it already exists, than do a PATCH request with the \_id field set.

A sample fetch request from the client would look like the following:
```
  fetch('https://mongo-broker.glitch.me/sampleDatabase/users', {
    headers: {
      'Content-Type': 'application/json',
      authorization: <authkey>
    },
    method: 'POST',
    body: JSON.stringify({
      fname: 'Tom',
      lname: 'Tommerson'
    })
  }).then(r => r.json()).then(console.log)
```

**NOTE:** You can setup a free cloud instance of MongoDB with [Atlas](https://www.mongodb.com/cloud/atlas).

Crafted by Patrick Trester