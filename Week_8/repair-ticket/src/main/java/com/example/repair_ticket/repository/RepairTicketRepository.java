package com.example.repair_ticket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.repair_ticket.domain.RepairTicket;

public interface RepairTicketRepository extends JpaRepository<RepairTicket, Integer>{
    
}
