# Abstraction and Polymorphism

## Assignment

Add one small abstraction to the repair ticket tracker.

The goal is to practice interface-style behavior, inheritance, composition, or polymorphism without making the design unnecessarily complicated.

## Part 1: Find a Flexible Behavior

Identify one behavior that could have more than one implementation.

For example:

* Sending notifications
* Calculating ticket urgency
* Formatting ticket summaries
* Choosing which technician should receive a ticket

Choose one behavior that would benefit from flexibility.

- Send Notification.

## Part 2: Create an Abstraction

Create an abstraction for the behavior you chose.

This might be an interface, an abstract class, or a small hierarchy of related classes.

Use the option that makes the design clearer.

I am going to start with an interface since I think it may be more common than abstract classes.

## Part 3: Create Multiple Implementations

Create at least two implementations of the behavior.

For example, one notification implementation might print to the console, while another might store messages for testing.

The exact implementation is up to you.

## Part 4: Use Polymorphism

Write code that can use the abstraction without depending on a specific implementation.

The calling code should not need to know which exact class is being used.

## Part 5: Evaluate the Design

Write a short explanation of why the abstraction helps.

Also explain why adding too many patterns or layers could make this small application harder to understand.

It could be easy to get carried away with over engineering. Not everything needs an interface/abstraction. If you truly have multiple implementations then it makes sense to to have interfaces.
Sometimes it is useful to be able to call something with common behavior but that doesnt rely on the implementation. However using it when it is not needed just makes good harder to understand and maintain. KISS

## Focused Questions

1. What behavior did you abstract?

    I abstracted the ability to send a notification.

2. Why might this behavior need more than one implementation?

    It is possible to want to send a notification in many different ways... sms, email, push etc.

3. How did polymorphism allow different objects to be used through the same type?

    It makes it possible because the implementation only cares about the shared behavior that is
    being provided and required by the interface.

4. Where did you use composition, inheritance, or both?

    Both of my notification classes are implementing my interface.

5. How can a design pattern help, and how can it become overengineering?

    It just depends on whether or not the pattern fits the problem. Using a sledgehammer
    to drive a nail is overkill.
