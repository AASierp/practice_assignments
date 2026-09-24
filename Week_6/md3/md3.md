# Filtering and Sorting with SQL

## Assignment

Write SQL queries that retrieve useful fitness class booking data from individual tables.

Focus on selecting specific columns, filtering rows, sorting results, and limiting output.

## Before You Query: Add Practice Data

Before writing queries, add enough sample data to make your results meaningful.

Create records for several members, trainers, class types, locations, equipment items, class sessions, bookings, trainer assignments, and equipment requirements.

Your data should include enough variety to test filtering, sorting, joins, and aggregate queries.

For example, include:

* More than one location
* More than one class type
* At least one session with multiple trainers
* At least one member booked into multiple sessions
* At least one class type that requires multiple equipment items
* At least one session with no bookings

Use `INSERT` statements so your data can be recreated if the database is reset.

## Part 1: Select Useful Data

Write basic `SELECT` queries against individual tables in the fitness class booking database.

Choose tables that help you inspect the core data, such as members, trainers, class types, sessions, locations, or equipment.

For each query, avoid selecting columns that would not be useful to read.

## Part 2: Filter Rows

Write queries that use `WHERE` to narrow results.

For example, you might find sessions at one location, classes after a certain date, or equipment in one category.

Choose filters that would make sense in a real application.

## Part 3: Sort Results

Write queries that use `ORDER BY` to make results easier to scan.

For example, a schedule might be sorted by start time, while people or class types might be sorted alphabetically.

Use sorting choices that match the kind of data being displayed.

## Part 4: Limit Results

Write queries that use `LIMIT` to return only part of a result set.

For example, an application might show the next few upcoming sessions or the first page of a longer list.

Explain why limiting the result would be useful.

## Part 5: Connect Queries to Application Needs

Choose three application views and write a query that could support each one.

 - A member directory view for example would rely on the members table and display some ofthe information housed there. 

 QUERY - SELECT * FROM members 
         ORDER BY name_last ASC

    this would pull all member info from members and sort alphabetically.

 - An equipment inventory view would contain the information stored in the equipment table

 QUERY - SELECT name, quantity FROM equipment 
         ORDER BY quantity DESC

    this would provide information from the eq table, ordered according to quantity greatest to least.

 - A class schedule view may depend on the information stored in the class_sessions table

QUERY - SELECT * FROM class_sessions 
        ORDER BY start_time ASC 
        LIMIT 3;
    
    this would pull the three soonest sessions that are scheduled.

For each query, briefly explain what the user would be trying to see or do.

## Focused Questions

1. Why should a query avoid selecting unnecessary columns? 

    To prevent unnecessary work and to provide only useful information.

2. What is the difference between filtering and sorting?

    sorting is ordering something according to some condition. Filtering is selecting particular items/rows based on some condition.

3. Why does a schedule query usually need `ORDER BY`?

    because a schedule has timestamps but the rows will not be ordered by them, they will be ordered by ID

4. What kind of interface behavior might require `LIMIT`?

    Limit is a good choice when an interface only needs a limited number of results, like only showing the next 5 classes rather than all classes

5. How does query shape affect the data an API can return?

    It determines the columns and rows that are returned.

6. What mistake could cause too many rows to be returned?

    missing some of the filtering options in your query, like omitting or incorrectly declaring a "WHERE" clause.


