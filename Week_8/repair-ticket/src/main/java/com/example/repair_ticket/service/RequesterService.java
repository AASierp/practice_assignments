package com.example.repair_ticket.service;
import org.springframework.stereotype.Service;
import com.example.repair_ticket.repository.RequesterRepository;

import com.example.repair_ticket.domain.Requester;
import java.util.List;

@Service 
public class RequesterService {

    private final RequesterRepository requesterRepository;

    public RequesterService(RequesterRepository requesterRepository){
        this.requesterRepository = requesterRepository;
    }

    public List<Requester> getRequesters(){
        return requesterRepository.findAll();
    } 

    public Requester getRequesterById(Integer id){
        return requesterRepository.findById(id).orElse(null);
    }

    public Requester postRequester(Requester requester){
        return requesterRepository.save(requester);
    }

    public void deleteRequester(Integer id){
        requesterRepository.deleteById(id);
    }
    
}
