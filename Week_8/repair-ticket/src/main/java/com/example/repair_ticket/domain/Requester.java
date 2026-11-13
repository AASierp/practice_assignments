package com.example.repair_ticket.domain;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity 
public class Requester {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Integer id;
    private String firstName;
    private  String lastName;
    private String email;

    public Requester(){}

    public Requester(Integer id, String first_name, String last_name, String email) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
    }

    public Integer getRequesterId(){
        return id;
    }

    public String getFirstName(){
        return firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public String getEmail(){
        return email;
    }

}
