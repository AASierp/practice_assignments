# JDBC and Persistence Tradeoffs

## Assignment

Compare JDBC-style data access with JPA repository-based persistence.

The goal is to understand what higher-level persistence tools provide and what lower-level SQL access makes visible.

## Part 1: Review a JDBC Example

Read a JDBC-style example that queries repair ticket data.

Identify the major steps in the data access flow.

At minimum, look for:

* Opening a database connection
* Preparing a SQL statement
* Running the query
* Reading the result set
* Mapping rows to Java objects

## Part 2: Explain the Query Flow

Write a short explanation of how data moves from the database into Java objects.

Describe what each major JDBC step is responsible for.

## Part 3: Compare with JPA

Compare the JDBC example to the JPA repository code in the repair ticket tracker.

Focus on what code you write directly with JDBC and what code JPA handles for you.

## Part 4: Identify Tradeoffs

Identify situations where JDBC may be useful.

Also identify situations where JPA or repositories may be more convenient.

## Part 5: Connect the Full Workflow

Explain how PostgreSQL, JDBC, JPA, repositories, services, and controllers fit together in a Spring backend application.

Use the repair ticket tracker as the example.

## Focused Questions

1. How is JDBC different from JPA?
2. What does JDBC make more explicit?
3. What does JPA make more convenient?
4. When might direct SQL access be useful?
5. How does data move from an HTTP request to a database write?
6. How does data move from a database row to an HTTP response?
