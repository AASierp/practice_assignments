package com.example.repair_ticket.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.repair_ticket.domain.Technician;
import java.util.List;
import com.example.repair_ticket.service.TechnicianService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("/technicians")
public class TechnicianController {

    private final TechnicianService technicianService;

    public TechnicianController(TechnicianService technicianService){
        this.technicianService = technicianService;
    }

    @GetMapping
    public List<Technician> getAllTechnicians(){
        return technicianService.getTechnicians();
    }

    @GetMapping("/{id}")
    public Technician getTechnicianById(@PathVariable Integer id){
        return technicianService.getTechniciansById(id);
    }

    @PostMapping
    public Technician postTechnician(@RequestBody Technician technician){
        return technicianService.postTechnician(technician);
    }
    
}
