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
            "location": "Gold's Gym",
            "address": {
                "number": 201,
                "street": "Venice Beach Blvd",
                "city": "Venice",
                "state": "CA",
                "zip": 40501 ,
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

Problem: Missing location data

I would trace the data through each layer. First, I would verify that the location name exists in the database. Then I would check the SQL query and backend object to make sure the value is being retrieved and mapped correctly. Next, I would inspect the JSON response sent by the API. Finally, I would check how the frontend receives and renders that value. The first layer where the data is missing or incorrect would identify where the problem is coming from.

Problem: A value is being rendered as something other than what was expected - Expected: "Canceled" 
Actual: "Booked"

Again, I would trace the flow of the data, probably from the DB to the final output/display. I would look for things like values being reversed by accident, for buttons being wired incorrectly or not working at all. Checking the actual value in the DB would likely come first. Then I would know if there is an issue in the way the data is being received/transferred to the database (like an update failing) or if the issue lived downstream from the DB. Assuming the value was correct, I'd work my way forward into the response objects and verify the data existence and correctness.

Problem: You have a class session showing the correct trainer ID but trainers name is missing from the output.

Once again we want to inspect the area in which this data is created, transferred, transformed and stored. This particular issue, initially makes me think that maybe we have a row that has an id but is somehow missing the name data. Then if the name is missing, I would have look at the schema to ensure/make the name a required field. It is also possible that the id and trainer name live in two different places in db and that there is a failed/incorrectly constructed/nonexistent join somewhere. I would then trace the data through the queries/objects/responses to see if the data is present anywhere beyond the DB and if it is being lost somewhere else.



## Focused Questions

1. Why should the browser not connect directly to the database?

    - Mostly because you don't want just anyone to have access to your data.
      it is much safer to access that data in a controlled way. Requiring user auth/auth validation
      at multiple levels. This prevents your data from being stolen/manipulated/destroyed.

2. How does a REST response differ from a raw database row?

    - A rest response wil be in the form a JSON object and may container all or only some of the       information from a row(s).

3. When is nested JSON useful?

    - When you need to represent some data object as its own but related entity, like address maybe a obj nesting location.

4. When might IDs be more useful than nested objects?

    IDs are useful when you dont necessarily need all the values from an obj/row. Rather than repeating yourself in many different places you can use IDs to access specific date from other table rows.

5. How do SQL joins affect API response shapes?

    - Joins allow you to retrieve data from multiple tables and combined it into a single response shape.

6. How do TypeScript types help protect frontend code?

    - Types help regulate the shape something must be in. They give a uniform structure to data and prevent data mismatching. This helps keep our data shape consistent and predictable.

7. How can a data issue be traced across frontend, API, backend, and database layers?

    - Simply by following the flow of the data through the system. We look and where and how the data is being rendered, what the shape and condition of the frontend obj is. At what the shape/condition of the response obj from the backend is and also at the data in the db
