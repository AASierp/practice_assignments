# Spring Application Structure

## Assignment

Create the first Spring version of the repair ticket tracker.

The goal is to organize the application into clear Spring responsibilities before adding a full database-backed workflow.

## Part 1: Create a Spring Project

Create a basic Spring application for the repair ticket tracker.

The project should be able to start successfully and expose at least one simple endpoint.

## Part 2: Identify Application Layers

Identify the major layers in the application.

At minimum, consider:

* Controllers - Deals with HTTP/API/Routing
* Services - This is the business logic layer, middleman for controller and repository
* Repositories - This is the db persistence layer.
* Configuration - defines application setup/infrustructure/behavior
* Domain or entity classes - These are just classes that define the shape of our entity objects

Decide what each layer should be responsible for.

- controller is responsible for HTTP/API - deals with requests and responses (sending/receiving) and routing

- Services is responsible for business logic and workflow coordination. Also acts as middleware between controller and repo. controller passes obj -> services does some validation/reshaping maybe -> repo stores it. It can also go the other direction or services can also interact with other parts of the system.

- Repository is responsible for the db interactions to and from. Persistence. interacts with jpa, hibernate, postgres

## Part 3: Create a Controller

Create a controller that handles repair ticket API requests.

Start with a small endpoint, such as viewing a welcome message or returning a list of example tickets.

The controller should focus on request and response behavior.

## Part 4: Create a Service

Create a service class that contains application logic.

Move workflow decisions out of the controller and into the service.

The controller should call the service instead of handling every detail directly.

## Part 5: Use Dependency Injection

Use Spring dependency injection to connect the controller to the service.

Avoid creating service objects manually inside controller methods.

## Focused Questions

1. What role does Spring play in this application?

    Spring provides infrustructure, it ties all of our pieces together. it provides access to special functions/methods
    and annotations that help orchestrate all of the layers.

2. What responsibility belongs in the controller?

    The controller is primarily concerned with HTTP/API handling. It deals with incoming requests and out going response and routing them appropriately.

3. What responsibility belongs in the service?

    Services is our middleman, it provides a validation layer but also an orchestration layer to distibute access to objects that pass throught as well as
    provide access to whatever service we may have defined inside it. 

4. How does dependency injection reduce tight coupling?

    Dependency injection reduces tight coupling but injecting something rather than creating a concrete implementation of it inside the class.
    it depends on it but it does not exist inside whatever we are injecting into.

5. Why is it useful to separate request handling from business logic?

    Primarily to support good architecture/design - it promotes seperation of concerns. Having everything live in a single place can get messy fast.
    It makes sense for things that do different things and have different responsibilies to live it different places.
