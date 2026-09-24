# REST Data Contracts for Frontend Apps

## Assignment

Design REST response shapes for a fitness class booking system backed by relational data.

Focus on how database records become API resources and how those resources become frontend data.

## Part 1: Identify Resources

Identify the main REST resources for the fitness class booking system.

For example, members, trainers, class sessions, and bookings are likely resources.

Decide which concepts need their own API endpoints and which concepts only need to appear inside another resource's response.

 - members
 - trainers
 - bookings
 - class types
 - locations
 - equipment
 - class sessions


## Part 2: Design Endpoints

Design resource-oriented endpoints for common read operations.

Include at least:

* One list endpoint
* One detail endpoint
* One endpoint that represents related data

list: GET fitness-app.com/api/members
detail: GET fitness-app.com/api/members/[id]
related-data: GET fitness-app.com/api/members/[id]/bookings

## Part 3: Design Response Shapes

Design JSON response shapes for your endpoints.

Include only the data needed for each response.

Think about when to include nested objects, counts, status values, dates, or only IDs.

 -- /api/members

{
    "data": [
        {
            "id": 1,
            "name_first": "Aaron",
            "name_last": "Sierp",
            "email": "aaron@fake.com"
        },
    ]
}

 -- api/trainers

 {
    "data" : [
        {
            "id": 1,
            "name_first": "Michelle",
            "name_last": "Flex",
            "email": "m.flex@fake.com"
        }
    ]
 }

 -- api/bookings

 {
    "data": [
        {
            "id": 1,
            "location": "Gold's Gym"
            "address": {
                "number": 201
                "street": "Venice Beach Blvd"
                "city": ""
                "state":""
                "zip": 40501 
            }
            "Trainer": "Arnold"
            "booking_status": "Booked"
        }
    ]
 }

## Part 4: Write TypeScript Types

Write TypeScript types for at least three response shapes.

Include one type for a list response, one for a detail response, and one for a response that includes related data.

export type members = {
    id: number;
    members: member[];
}

export type member = {
    id: number;
    name_first: string;
    name_last: string;
    email: string;
}

export type booking = {
    id: number
    booking_status: string
    date: date
}

export type memberBookings = Pick<member, 'name_first', 'name_last', 'email'> & Pick<booking, 'booking_status', 'date'>

## Part 5: Trace Data Problems

Choose three possible data problems and trace where each problem might come from.

For example, a missing location name might come from the database, SQL query, backend mapping, API response, or frontend rendering.

Explain how you would narrow down the source of the issue.

I would trace the data through each layer. First, I would verify that the location name exists in the database. Then I would check the SQL query and backend object to make sure the value is being retrieved and mapped correctly. Next, I would inspect the JSON response sent by the API. Finally, I would check how the frontend receives and renders that value. The first layer where the data is missing or incorrect would identify where the problem is coming from.



## Focused Questions

1. Why should the browser not connect directly to the database?
2. How does a REST response differ from a raw database row?
3. When is nested JSON useful?
4. When might IDs be more useful than nested objects?
5. How do SQL joins affect API response shapes?
6. How do TypeScript types help protect frontend code?
7. How can a data issue be traced across frontend, API, backend, and database layers?
