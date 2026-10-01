# REST API Controller

## Assignment

Implement REST endpoints for the repair ticket tracker.

The goal is to practice resource-oriented API design and connect HTTP requests to Java methods.

## Part 1: Review the API Contract

Review the API contract you designed for the repair ticket tracker.

Choose a small set of endpoints to implement first.

At minimum, consider:

* Viewing all tickets
* Viewing one ticket
* Creating a ticket
* Updating a ticket
* Deleting or closing a ticket

## Part 2: Implement GET Endpoints

Create controller methods that handle `GET` requests.

The endpoints should return structured data that could be used by a frontend.

Use clear resource paths, such as `/tickets` or `/tickets/{id}`.

## Part 3: Implement POST or PUT Endpoints

Create an endpoint that accepts request data.

Map incoming JSON to a Java object.

Use the request data to create or update a repair ticket.

## Part 4: Return Useful Responses

Return responses that include useful data and appropriate HTTP status codes.

For example, think about what should happen when:

* A ticket is created
* A ticket is found
* A ticket does not exist
* A request body is invalid

## Part 5: Test the API Manually

Use a browser, Postman, curl, or another API tool to test the endpoints.

Verify both successful and unsuccessful requests.

## Focused Questions

1. Which endpoints did you implement first, and why?

    - I implemented the GET /tickets first. It just seems to be the natural place
    to start, get is usually easiest to implement also since there is no req options to
    deal with.

2. How did the URL paths represent resources?

    GET /tickets - retrieve a collection of tickets
    GET /tickets/{id} - retrieve a single ticket
    POST /tickets - create a ticket and add it to the collection
    
    seems pretty self explanitory given the context of the assignment.

3. How did Spring map request data to Java objects?

    using the @RequestBody annotation, it does the serialize/deserialize under the hood.

4. Which HTTP status codes did you use?

    200 ok
    201 created
    400 bad request
    404 not found

5. How did testing the API reveal whether the controller worked correctly?

    the manual testing informed me that the objects were being created or being displayed correctly,
    It also validates that the routing is working properly. The error handling was also tested by purposly 
    passing bad data we are able provoke bad status codes. 
