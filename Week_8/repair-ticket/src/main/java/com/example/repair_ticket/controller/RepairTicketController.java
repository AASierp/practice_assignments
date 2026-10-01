package com.example.repair_ticket.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.repair_ticket.service.RepairTicketService;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.repair_ticket.domain.RepairTicket;

import java.util.List;

@RestController
@RequestMapping("/tickets") 
public class RepairTicketController {

    private final RepairTicketService repairTicketService;

    public RepairTicketController(RepairTicketService repairTicketService){
        this.repairTicketService = repairTicketService;
    }

    @GetMapping
    public List<RepairTicket> getTickets(){
        
        return repairTicketService.getAllTicketsService();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RepairTicket> getTicketById(@PathVariable int id){

        RepairTicket response = repairTicketService.getTicketByIdService(id);

        if(response == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(response);
    }

    @PostMapping 
    public ResponseEntity<RepairTicket> postTicket(@RequestBody RepairTicket ticket){
       RepairTicket response = repairTicketService.postTicketService(ticket);

       return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}