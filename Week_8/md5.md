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

1. First a connection has to be established with the DB -
this is achieved by passing the url, username and password to a function that handles the connection. And saving that information in a Connection object. - I think this is where the actual connection is established. 

2. We then pass a prepared sql statement(query) in a variable to the connection object we made in the previous step. 

3. Then we call .executeQuery on our prepared statement. this executes our query and we then store the result in a variable.

4. That information is then iterated over row by row and mapped very explicitly to field in a predefined java obj. This is one of the steps that JPA abstracts from you, it handles this behidn the scenes. When all objects have been mapped, the loop condition becomes false and the loop exits.

## Part 2: Explain the Query Flow

Write a short explanation of how data moves from the database into Java objects.

Describe what each major JDBC step is responsible for.

connection established -> prepared statement -> query db -> db returns rows -> rows stored in a ResultSet -> ResultSet mapped to java obj

After a connection is established, a prepared statement is created and the query is executed. The database responds with a rows(s) that are sent back and stored in a ResultSet object. The ResultSet is then iterated over and the values in those objects are mapped to the field values in a predefined java object.

## Part 3: Compare with JPA

Compare the JDBC example to the JPA repository code in the repair ticket tracker.

Focus on what code you write directly with JDBC and what code JPA handles for you.

Much of the JDBC code that you would write manually is taken care of behind the scenes with JPA. JPA makes the connection, builds the query and executes it and the maps it your entities without you having to explicitly deal with any of those things yourself. It is able to take care of all this through field and entity annotations and instances of the JPArepository. You are essentially only responsible for annotating correctly and calling the repo with the right method for the job.

## Part 4: Identify Tradeoffs

Identify situations where JDBC may be useful.

Also identify situations where JPA or repositories may be more convenient.

I could see JDBC being a better fit if you want explicit control over more of the connect, sql query, performance behavior and row mapping. JPA is probably more convenient most of the time, in terms of speed and simplicity.

## Part 5: Connect the Full Workflow

Explain how PostgreSQL, JDBC, JPA, repositories, services, and controllers fit together in a Spring backend application.

Use the repair ticket tracker as the example.

In the repair ticket tracker for example. The controller may execute something a get (it recieves a request from the frontend). The controller says "oh here is a get request" let me fire my GET method. That method then call repairTicketService.getAllTickets(). This is a method that is provided through our services layer. Inside that layer we have created services that use the methods provided by the repairTicketRepo like .findAll(). Our repo is extending the JPA repo class, which is where those methods come from. Then JPA makes the quests and JDBC makes the db connection, the rows are returned and then JPA/Hibertnate maps that information to an object of one of our entities(models). Like RepairTicket. That is then passed back to the controller and Spring serializes it into a json obj and sent back top the front. 

## Focused Questions

1. How is JDBC different from JPA?

    - JDBC can stand on its own and do all of the things that JPA does, just manually setup. JPA is layer that sits on top and handles many of those manual operations behind the scenes (sql queries, mapping etc..).
    JPA could not work independently from JBDC, JBDC is still establishing the connection and communicating with Postgres.

2. What does JDBC make more explicit?

    - JDBC you manually manage things like the connection, the prepared statement (query), parsing ResultSets into java objects. 

3. What does JPA make more convenient?

    JPA makes the db connection, querying, mapping to entities etc more convenient and easierr to implement, through annotation and repositories.

4. When might direct SQL access be useful?

    It could be nice to have when want ganular control over the queries. When doing complex joins for example.

5. How does data move from an HTTP request to a database write?

    HTTP Request -> Spring deserializes into java obj -> controller calls services -> services calls repo -> repo executes query -> jpa/hibernate creates sql, maps entity to rows/columns -> JDBC connects to db -> postgres receives it and adds to/cretes and adds to table.

6. How does data move from a database row to an HTTP response?

    Postgres -> JDBC receives the returned row -> hibernate reads row -> hibernate maps the column values into your entity objects -> repo returns the entity -> service returns them to controller -> controller returns -> spring serialize -> http reponse goes back opt the front.