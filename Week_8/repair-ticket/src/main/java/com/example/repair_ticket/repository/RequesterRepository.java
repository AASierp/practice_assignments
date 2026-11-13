package com.example.repair_ticket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.repair_ticket.domain.Requester;

public interface RequesterRepository extends JpaRepository<Requester, Integer> {
    
}
