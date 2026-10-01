# JPA Entities and Repositories

## Assignment

Add persistence modeling to the repair ticket tracker using JPA.

The goal is to map Java objects to database tables and use a repository to read and write data.

## Part 1: Choose Entities

Decide which repair ticket concepts should become JPA entities.

At minimum, consider:

* Repair tickets
* Requesters
* Technicians
* Categories
* Status values

Choose a small model that supports the current application.

## Part 2: Create Entity Classes

Create entity classes with fields, identifiers, and simple relationships.

Each entity should have an ID field.

Use relationships only where they make the model clearer.

## Part 3: Create a Repository

Create a repository for at least one entity.

Use the repository to save and retrieve data instead of storing everything in memory.

## Part 4: Connect the Service to Persistence

Update the service layer so it uses the repository.

The controller should still call the service, and the service should coordinate persistence behavior.

## Part 5: Explain the Mapping

Write a short explanation of how the Java model maps to database tables.

Include notes about entity identity, relationships, and how object references relate to database records.

It uses jpa/hibernate to do the mapping. Classes marked with @Entity become their own tables and the fields become columns.
some of the fields will get special annotation like @id this indicates that a field should be used as the PK. You can also establish relationships through annotation, like @ManyToOne, this will tell jpa that this fields id needs to be used as a foreign key on the many side. @ManyToMany will tell jpa that a relationship table needs to be established.

## Focused Questions

1. What makes a class a good candidate for a JPA entity?

    A good candidate for an entity is something that describes a real thing with multiple properties.
    Like repair ticket or technician.

2. Why does each entity need an identifier?

    The id is a quick easy way to keep track of and access the entity. It also allows us to build relatinships with other entities.

3. Which fields became database columns?

    All fields become columns unless otherwise annotated 

4. Which relationships did you model, and why?

    I modeled the repair ticket -> technician relationship and the requester -> repairticket relationship.
    because it was necessary for the db to create foreign keys on the table to make the relationships work.

5. How does a repository simplify reading and writing data?

    a repository keeps the job of interacting with db separate and clean. It also provides some nice methods for 
    interacting with the db like find/save/filter.

6. What is one tradeoff of using an ORM like JPA?

    Maybe you loose some level of granualr control over what exactly is happening nad how?
