## Entity List

 # members: - one to many with booking

 - id [pk] - required/unique
 - name_first - required
 - name_last - required
 - email - required
 - membership_level


 # trainers: - one to many with bookings & sessions

 - id [pk] - required/unique
 - name_first - required
 - name_last - required
 - email - required

 # class_types: - one to many with class schedule

 - id [pk] - required/unique
 - title - required
 - description - required
 - duration - required
 
 # scheduled_class_sessions: - many to one with location and class_type

 - id [pk] - required/unique
 - class_type_id [fk] - required
 - location_id [fk]  - required
 - start_time - required
 - capacity - required
 - date - required

 # locations: - one to many with schedule

 - id [pk] - required/unique
 - name - required
 - address - required

 # equipment:

 - id [pk] - required/unique  
 - name - required

 # bookings: - many to many with trainer & one to one with member

 - id [pk] - required/unique
 - member_id [fk] - required
 - trainer_id [fk] - required
 - booking_status - required

 # session_trainers: - many to many between trainer and class_session

 - id [pk] - required/unique
 - class_session_id [fk] - required
 - trainer_id [fk] - required

 # class_type_equipment: many to many between equipment & class_type

 - class_type_id [fk] - required
 - equipment_id [fk] - required
 - quantity_required - required

## Focused Questions:

1. Which relationships are one-to-many?

     - members < bookings
     - class sessions < bookings
     - trainers < session_trainers
     - class_session < session trainers
     - location < class_sessions
     - class type < class_sessions
     - class type < class_type_equipment
     - equipment < class_type_equipment

2. Which relationships are many-to-many?

    - trainers >< class_sessions
    - equipment >< class_types

3. Why does a many-to-many relationship need a join table?

    - You need a join table for many to many relationships because without it you would be duplicating data

4. What information belongs directly on `class_sessions`?

    - id
    - class_type_id
    - location_id
    - start_time
    - capacity

5. What information belongs in `bookings` instead of directly on `members` or `class_sessions`?

    - member_id
    - class_session_id
    - booking_status

6. Why is `session_trainers` more flexible than storing one trainer directly on `class_sessions`?

    Because one trainer can teach multiple class sessions and class sessions can have multiple trainers. 

7. Why is `class_type_equipment` more useful than listing equipment names in a text field?

    Because you may only need specific pieces of equipment per class, not all of them. The join table gives you queryable information, so you could see something like "all class that use dumbbells"
