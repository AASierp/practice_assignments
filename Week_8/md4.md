# Postgres Configuration and Verification

## Assignment

Connect the Spring repair ticket tracker to PostgreSQL.

The goal is to configure the application for real persistence and verify that data is being stored correctly.

## Part 1: Configure the Database Connection

Configure the Spring application to connect to a PostgreSQL database.

Use environment-based settings for values such as:

* Database URL
* Database username
* Database password

Avoid hardcoding sensitive values directly into source code.

## Part 2: Start the Application

Run the Spring application with the database connection enabled.

Confirm that the application starts without database connection errors.

## Part 3: Create or Save Data

Use the API to create or update repair ticket data.

The data should be written to PostgreSQL through the application.

## Part 4: Inspect the Database

Inspect the database tables directly.

Verify that the records match the actions you performed through the API.

## Part 5: Troubleshoot One Issue

Intentionally or carefully observe one persistence-related issue.

For example:

* A missing environment variable
* A wrong database URL
* A failed validation
* A table or column mismatch
* Data not appearing where expected

Explain whether the issue happened in the application layer or the database layer.

## Focused Questions

1. What role does PostgreSQL play in the application?
2. Which configuration values should come from the environment?
3. How did you verify that application data was saved?
4. What database table changed when you used the API?
5. How can you tell whether a bug is in the application layer or database layer?
