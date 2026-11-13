package com.example.repair_ticket.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.repair_ticket.domain.Technician;

public interface TechnicianRepository extends JpaRepository<Technician, Integer>{
    
}
