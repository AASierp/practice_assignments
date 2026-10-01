public class RepairTicketService {
    
    private NotificationService notificationService;

    public RepairTicketService(NotificationService notificationService){
        this.notificationService = notificationService;
    }

    public void assignTechnicianService(RepairTicket repairTicket, Technician technician){
        repairTicket.assignTechnician(technician);
        technician.addTickets(repairTicket);
        
        notificationService.sendNotification(technician.getFirstName() + " " + technician.getLastName() + " has been assigned to ticket " + repairTicket.getTicketId() + ", " + "Technician tickets updated");
    }
}
