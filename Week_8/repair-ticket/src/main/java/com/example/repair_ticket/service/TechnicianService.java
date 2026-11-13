package com.example.repair_ticket.service;
import com.example.repair_ticket.repository.TechnicianRepository;
import com.example.repair_ticket.domain.Technician;
import java.util.List;

import org.springframework.stereotype.Service;

@Service 
public class TechnicianService {
    
    private final TechnicianRepository technicianRepository;

    public TechnicianService(TechnicianRepository technicianRepository){
        this.technicianRepository = technicianRepository;
    }

    public List<Technician> getTechnicians(){
        return technicianRepository.findAll();
    }

    public Technician getTechniciansById(Integer id){
        return technicianRepository.findById(id).orElse(null);
    }

    public Technician postTechnician(Technician technician){
        return technicianRepository.save(technician);
    }

}
