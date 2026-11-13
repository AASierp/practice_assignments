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

While attempting to POST a new repairTicket, I encountered this "TransientPropertyValueException" execption at one points. The db seemed to be fine, the issue was that I was trying to reference a requester (and a technician really) that did not exist yet. The solution I used was to add cascading to those fields. This allows hibernate to create those table entries automatically. I would prefer to add requesters and technicians through their own POST endpoints eventually. The down side to cascading is that if a requester has multiple tickets it will create a new entry with a new id in the requester/technician table everytime you make a new ticket. Which, I feel, is a violation of normalization.

## Focused Questions

1. What role does PostgreSQL play in the application?

    Postgres is the actual DB, it creates, stores and serves the contents of the tables.

2. Which configuration values should come from the environment?

    Ideally you should obfuscate passwords, user names, endpoints and any other sercrets(keys for example).
    
3. How did you verify that application data was saved?

    I viewed the tables and their content through DBeaver. Although, I could have done GET through swagger as well.

4. What database table changed when you used the API?

    The repair_ticket table, the requester table and the techician table all changed.
    This was due to the use of cascading on the technician and requester fields in the 
    repairTicket class.

5. How can you tell whether a bug is in the application layer or database layer?

    Mainly by carefully reading the logs and see what the error is and where it occurs.
