# Normalization and Data Shape

## Assignment

Refine the fitness class booking data model so repeated data is separated into related tables. You will not need to add data to your model yet.

The goal is to reduce duplication while keeping the data useful for application features.

## Part 1: Review Unnormalized Data

Start with this sample record:

```text
Member: Jordan Lee
Email: jordan@example.com
Class: Morning Strength
Class Type: Strength Training
Location: Downtown Studio
Room: Studio A
Trainer 1: Amara Singh
Trainer 2: Chris Taylor
Equipment: Dumbbells, Mats, Resistance Bands
Booking Status: confirmed
Booked At: 2026-09-21 09:00
```

Identify which values would be duplicated if records like this were stored repeatedly. 

- potentially all of these values could be duplicated 
- but particularly - location, trainer(s), equipment, class

Look especially for values that describe different kinds of things, such as people, scheduled events, places, and equipment. 

- each of these things should really have their own tables with table id. 

## Part 2: Separate Repeated Concepts

Revise the data model so repeated concepts are moved into their own tables.

For example, a trainer should not need to be retyped every time they teach a class session, and a location address should not need to be copied onto every scheduled class.

As you revise the model, decide which relationships need join tables.

At minimum, think about relationships where:

* One record can connect to many other records
* Both sides of the relationship can have many matches
* The relationship itself may need extra information

## Part 3: Apply Normalization Rules

Review the model for common normalization issues.

Look for:

* Multiple values stored in one field
* The same fact repeated in many rows
* Fields that depend on the wrong table
* Data that would be hard to update consistently

Revise the model so each fact is stored in the most appropriate place.

## Part 4: Test the Model Against Application Needs

Choose two application views and decide what data each view would need.

For example, a class session detail view might need the session time, class type, location, assigned trainers, equipment, and booked members.

Use this step to check whether the normalized model still supports useful application data shapes.

## Focused Questions

1. What duplicated data did normalization remove?

    - It prevented equipment, location, trainer, member, booking and class information from
    being repeated or potentially repeated by breaking each of these into their own tables and associating them by keys.

2. Which fields were hardest to place in the right table?

    - The room info was initially in the location table, but a location can
    have many rooms, so I broke it out into its own table. Also, class_session had location_id and room_id at one point but then I realized that the room table contained location_id so I removed location_id from class_sessions.

3. Which relationships need join tables, and why?

    trainer and class sessions need a join table because it was a many to many relationship. One trainer may have many class_sessions and one class_sessions may have many trainers.

    the class type and equipment had the same many to many for the same reason.

4. What information belongs on a scheduled class session?

    - id
    - class_type_id
    - room_id
    - start-time
    - capacity

5. What information belongs on a class type?

    - id
    - title
    - description
    - duration

6. How can normalized data still support useful frontend views?

    noramlizing the data does not affect the front ends ability to aggregate
    organize and display data.

7. What tradeoff comes with splitting data across more tables?

    the information becomes decentralized and you have to understand the relationships between the tables. This will also require more joins.
