# Repair Ticket API Contract

## Assignment

Design an API contract for the repair ticket tracker.

The goal is to describe the backend API before implementing it with Spring.

## Part 1: Identify API Resources

Identify the main resources the API should expose.

For example, the API may expose tickets, technicians, requesters, categories, or status updates.

Decide which concepts need their own endpoints and which concepts can appear inside another response.

API Endpoints -

Main resource - /repairtickets

- This is the main area of concern, the ability to perform crud operations on tickets.

- It would also be useful to have /technician so that we can access some of information for creating tickets, likely just a GET

- Same thing with requester, we need to expose that information as read only for ticket creation. In the future though, you may want to do more with ticket/requester if you had an admin login for example. We may want the ability to create and modify those entities. 

I don't think the ENUMs really need to be there own endpoints, at least not right now. We can just limit the available choices for each on the frontend to mirror the back/db and pass them as values in the json.

## Part 2: Design Endpoints

Design REST endpoints for the first version of the application.

Include endpoints that support a useful repair ticket workflow.

At minimum, consider:

* Viewing a list of tickets
* Viewing one ticket
* Creating a ticket
* Updating ticket status or assignment

Choose endpoint names and HTTP methods that match the resource behavior.

GET ../tickets - view all tickets

GET ../tickets/{id} - view a single ticket by ID

POST ../tickets - create a ticket

PUT/PATCH ../tickets/{id} - update ticket with id

DELETE ../tickets/{id} - delete a ticket by id (this will likely only be use in admin access)

GET ../technicians - get all technicians

POST ../technicians - create new technicians

PATCH ../technicians/{id} - update existing technician info

GET ../requesters - get all requesters

POST ../requesters - create a new requester

PATCH ../requesters - update existing requester

## Part 3: Design Request Shapes

Design the JSON request bodies needed by your endpoints.

Include only the data the client should send.

For example, a create-ticket request may not need the same fields as a ticket response.

Frontend request shapes --

POST ticket: - ID will be determined by db and status should default to open, that can be handled on the backend.

{
    "title": "",
    "description": "",
    "category": "",
    "priority": "",
    "technicianId": number,
    "requesterId": number
}

PATCH: 

    {
        "title": "",
        "description": "",
        "status": "", 
        "priority": "",
        "technicianId": number
    }

POST: Technician -

    {
        "name_first": string,
        "name_last": string,
        "email": string,
    }

PATCH: 

    {
        "name_first": string,
        "name_last": string,
        "email": string
    }

POST: Requester

    {
        "name_first": string,
        "name_last": string,
        "email": string
    }

PATCH:

    {
        "name_first": string,
        "name_last": string,
        "email": string
    }

## Part 4: Design Response Shapes

Design JSON response bodies for your endpoints.

Decide when the response should include nested objects, IDs, status values, timestamps, or related records.

Keep responses useful for a frontend without exposing unnecessary internal details.


GET ALL TICKETS -
{
    "tickets" : [
        {
            "id": 1,
            "title": "Virus Removal",
            "description": "Custom has contracted a virus, diagnose and repair.",
            "category": "SOFTWARE",
            "priority": "HIGH",
            "status": "INPROGRESS",
            "technicianName": "Aaron Sierp",
            "requesterName": "Calen Smith",
            "creationDate": "2026-09-11 18:30:00"
        }

        ...
    ]
}

GET TICKET: 

{

            "id": 1,
            "title": "Virus Removal",
            "description": "Custom has contracted a virus, diagnose and repair.",
            "category": "SOFTWARE",
            "priority": "HIGH",
            "status": "INPROGRESS",
            "technicianName": "Aaron Sierp",
            "technicianNotes": ["note1", "note2"],
            "requesterName": "Caleb Smith",
            "requesterEmail": "csmith@fake.com",
            "creationDate": "2026-09-11 18:30:00"
}

POST:

    {
        "id": 42,
        "title": "Virus Removal",
        "description": "Customer has contracted a virus, diagnose and repair.",
        "category": "SOFTWARE",
        "priority": "HIGH",
        "status": "OPEN",
        "technicianName": "Aaron Sierp",
        "requesterName": "Calen Smith",
        "creationDate": "2026-09-29T10:30:00"
    }

PATCH: same as post but the response obj should reflect the updated value.

GET Techincian:

    {
        "id": 1,
        "firstName": "Aaron",
        "lastName": "Sierp",
        "email": "aaron@fake.com"
    }

POST/PATCH: respond with all fields sans id


## Part 5: Define Status Codes

Choose HTTP status codes for successful and unsuccessful outcomes.

For example, think about what should happen when:

* A ticket is created
 
 - return 201 Created

* A ticket is not found

- return 404 Not Found

* A request body is invalid

- return 400 Bad Request

* A workflow change is not allowed

- return 409 Conflict

for successful get/patch 200 Ok (with the obj in res body)

for a successful delete operation 204 No Content (no res body content)


## Part 6: Draft an OpenAPI Specification

Create an OpenAPI draft for the endpoints and data shapes you designed.

The contract does not need to describe every future feature. It should clearly document the first version of the API.

## Focused Questions

1. How is an API resource different from a Java class?
2. Which endpoints expose ticket data, and which endpoints change ticket state?
3. Why might create requests and ticket responses have different shapes?
4. When should a response include nested data instead of only IDs?
5. Which errors should be represented with HTTP status codes?
6. How will this contract help when the Spring API is built later?
