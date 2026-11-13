package com.example.repair_ticket.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.repair_ticket.service.RequesterService;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.repair_ticket.domain.Requester;
import java.util.List;


@RestController
@RequestMapping("/requesters") 
public class RequesterController {
    
    private final RequesterService requesterService;

    public RequesterController(RequesterService requesterService){
        this.requesterService = requesterService;
    }

    @GetMapping 
    public List<Requester> getAllRequesters(){
        return requesterService.getRequesters();
    }

    @GetMapping("/{id}")
    public Requester findRequesterById(@PathVariable Integer id){
        return requesterService.getRequesterById(id);
    }

    @PostMapping
    public Requester createRequester(@RequestBody Requester requester){
        return requesterService.postRequester(requester);
    }

    @DeleteMapping("/{id}")
    public void deleteRequesterById(@PathVariable Integer id){
        requesterService.deleteRequester(id);
    }
}
