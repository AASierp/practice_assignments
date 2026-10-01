package com.example.repair_ticket.service;

import com.example.repair_ticket.domain.Technician;
import com.example.repair_ticket.repository.RepairTicketRepository;
import java.util.List;
import org.springframework.stereotype.Service;
import com.example.repair_ticket.domain.RepairTicket;

@Service
public class RepairTicketService {

    private RepairTicketRepository repairTicketRepository;
    private NotificationService notificationService;
    
    public RepairTicketService(NotificationService notificationService, RepairTicketRepository repairTicketRepository) {
        this.notificationService = notificationService;
        this.repairTicketRepository = repairTicketRepository;
    }

    public void assignTechnicianService(RepairTicket repairTicket, Technician technician) {
        repairTicket.assignTechnician(technician);
        technician.addTickets(repairTicket);

        notificationService.sendNotification(technician.getFirstName() + " " + technician.getLastName()
                + " has been assigned to ticket " + repairTicket.getTicketId() + ", " + "Technician tickets updated");
    }

    public List<RepairTicket> getAllTicketsService() {

        return repairTicketRepository.findAll();
    }

    public RepairTicket getTicketByIdService(int id){

       return repairTicketRepository.findById(id).orElse(null);
    }

    public RepairTicket postTicketService(RepairTicket ticket){
        return repairTicketRepository.save(ticket);
    }
}
