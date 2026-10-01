# Encapsulation and Validation

## Assignment

Revise the repair ticket tracker so objects protect their own data.

The goal is to prevent invalid state and make the model easier to use safely.

## Part 1: Review Public Data

Review your classes and identify any fields that other code can change directly.

Decide which fields should be private and which values should only change through methods.

## Part 2: Encapsulate Fields

Use access modifiers to hide implementation details.

Expose only the methods that other code needs in order to use each object.

Do not create setters automatically for every field. Decide which values should be changeable after the object is created.

## Part 3: Add Validation

Add validation for important rules in the model.

For example, your application might prevent:

* A ticket with no title
* A ticket with no requester
* A resolved ticket being moved back to an invalid status
* A technician being assigned when the ticket is already closed

Choose rules that make sense for your design.

## Part 4: Represent Failure

Decide how your code should respond when an operation is invalid.

For this assignment, focus on making invalid operations visible and understandable.

You may use return values, exceptions, or another clear approach.

## Part 5: Explain the Public API

Write a short explanation of how another developer should use your classes.

Describe what they can do safely and what your classes prevent.

Taking RepairTicket as an example. The user can create a ticket through the constructor, the Ticket can then be modified through specific methods that are guarded for invalid input and data can be read, not directly, but through getter methods.

## Focused Questions

1. Why should fields usually be private?

    Most fields should be private so they cannot be changed directly. Changes should happen through setters or, preferably in this case, specific operational methods where the data can be validated before the object's state is changed.

2. Which fields should not have ordinary setters?

    To be fair, a "setter method" and any other method can posses the same interal business logic, using "setters" just communicates a simple, direct update. using a method with different verbage just communicates that there is more going on inside the method than simple changing its state. There are some fields however that should not be settable, like id for example. 

3. What invalid state did your code prevent?

    It prevents required values from being set to null or empty strings. It enfoces length requirements on some fields and prevents operational updates on tickets that are "closed"

4. How did you make invalid operations understandable?

    Primarily by throwing exceptions in response to invalid input or operations. Such as "IllegalStateException" and "IllegalArgumentException". 

5. How does encapsulation make later API or database work safer?

    Because the rules will apply regardless of what is interacting with the data. If you have multiple places where the data is being used, it makes sense to encapsulate the data and perform validations close to the data to prevent it from having to be done in multiple places further down stream.
