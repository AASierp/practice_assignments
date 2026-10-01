# Ticket Behavior and Program Logic

## Assignment

Add behavior to the repair ticket tracker model.

The goal is to make the Java objects do useful work instead of only storing data.

## Part 1: Choose Ticket Behaviors

Choose several behaviors that make sense for a repair ticket tracker.

For example, the system may need to:

* Assign a technician to a ticket
* Change a ticket's status
* Change a ticket's priority
* Add a note or update
* Decide whether a ticket is open or closed

You do not need to implement every possible workflow. Choose a small set that shows meaningful object behavior.

## Part 2: Implement Methods

Add methods to your classes to support the behaviors you chose.

Put behavior on the class that is responsible for that behavior.

Avoid putting all logic in one large method.

## Part 3: Use Conditionals

Use conditionals to handle different states in the ticket workflow.

For example, some operations may only make sense when a ticket is open, assigned, or unresolved.

Decide what rules your application should enforce.

## Part 4: Use Collections

Use a collection to represent multiple items in the application.

For example, you might track:

* A list of tickets
* A list of status updates
* A list of tickets assigned to one technician

Use loops or collection methods to inspect or update the data.

## Part 5: Demonstrate the Workflow

Write a small Java program that demonstrates a realistic ticket workflow.

The program should create tickets, modify them, and print useful output.

## Focused Questions

1. Which class owns the behavior for changing a ticket's status?

    - RepairTicket

2. What rules did you enforce with conditionals?

    - If ticket status closed, ticket cannot be modified

3. Where did you use a collection, and why?

    - I added a collection of notes to RepairTicket and a collection of tickets to Technician.

4. How did adding behavior change your class design?

    It changed the way information in the class can be accessed and modified

5. What behavior would become difficult if all logic lived in one `main` method?

    - If everything lived in main it would quickly become extremely difficult to manage. Difficult to read, maintain and navigate.
