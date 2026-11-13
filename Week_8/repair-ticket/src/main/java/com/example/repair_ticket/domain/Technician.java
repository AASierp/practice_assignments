package com.example.repair_ticket.domain;

import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

@Entity 
public class Technician {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer employeeId;
    private String firstName;
    private String lastName;
    private String email;
    @JsonIgnore
    @Transient  
    private List<RepairTicket> tickets = new ArrayList<>();

    public Technician(){}

    public Technician(Integer employeeId,
             String firstName, 
             String lastName, 
             String email,
             List<RepairTicket> tickets){

        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.tickets = tickets;
    }

    public Integer getEmployeeId(){
        return employeeId;
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

    public List<RepairTicket> getTickets(){
        return tickets;
    }

    public void addTickets(RepairTicket ticket){
        tickets.add(ticket);
    }

}

