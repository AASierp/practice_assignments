# Aggregates, Counts, and Summaries

## Assignment

Write SQL queries that summarize fitness class booking data.

Focus on aggregate functions, grouping, and summary information that applications commonly display.

## Part 1: Count Records

Write queries that use `COUNT` to answer basic questions about the database.

For example, you might count members, sessions, bookings, trainers, or equipment items.

Choose counts that would help someone understand the size or activity of the system.

## Part 2: Group Results

Write queries that use `GROUP BY` to summarize records by category.

For example, you might group sessions by class type, bookings by session, or sessions by location.

Make sure each grouped result answers a clear question.

## Part 3: Summarize Activity

Write aggregate queries that describe participation or capacity.

For example, you might calculate how many people booked each class session or which class types are most active.

Use joins when the summary requires information from more than one table.

## Part 4: Shape Summary Data for an Application

Choose two summary queries and describe how the results could appear in an API response.

For each summary, identify the fields the frontend would need and what the user could learn from them.

## Focused Questions

1. What does `GROUP BY` do?

    - groups the rows that have the same value in one or more columns

2. Why do aggregate queries often need joins?

    - because you may be aggregating data that exists on separate tables

3. What is the difference between counting bookings and counting class sessions?

    - they are two different things,

4. Why might a class session with zero bookings disappear from an `INNER JOIN` summary?

    because inner joins only return if data exists on both tables

5. When would a summary query be more useful than returning every row?

    When you need broad general information about all of rows rather than a specific data point.

6. How can aggregate data support dashboard or reporting features?

    It provides statistics, which translates into good reporting points.

