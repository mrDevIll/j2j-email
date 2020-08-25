# JSON to JSON email server
### Use JSON to manage your form inputs and send emails via server

## Table of Content

* [Introduction](#Introduction)
* [Usage](#Usage)
* [Example](#Example)
* [Security](#Security)
* [Installation](#Installation)

## Introduction
J2J-email is a Rest web API that emulated phpmail function but accepts requests in JSON format and delivers the emails containing the user inputs through an nodejs/express server. 

## Usage

#### Server side:
The API contains a ENV.config file containing the server configuration files and email settings. Once you modify the variable according to the comments, rename the file from """.env.config""" to """.env""".

the request end point is localhost/email/ and the message needs to be send via POST method and the header need to be an application/json type and contain a valid JSON object.

#### The message
the post requests needs to have two properties a "message" field containing a JSON object with the form contents and a "required" field containing an Array with the required fields. Below a suitable example:


## Example

**end point:**  ``` localthost/email``` 
**content type:** ``` application/json ``` 

```
{
    "message":{
        "name":"Joe Black",
        "email":"user@email.com",
        "text": "I love your blog please contact me for collaboration",
        "newsletter" : true,
        "privacy":"accepted"
    },
    "required":["email","text","privacy]
}
```

the request above will send the below message to the client browser:
```
{
    "message": "email sent"
}
```
and the below email message to the configured email:
```
message from the server:  name: Joe Black  email: user@email.com  text: I love your blog please contact me for collaboration  newsletter: true  privacy: accepted 
```
## Security
The API will support CORS


## Installation

clone the package then 
```
npm install
node app.js
```
to start the server
