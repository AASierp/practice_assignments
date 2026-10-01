import java.util.ArrayList;
import java.util.List;


public class Main {


    public static void main(String[] args) {

        List<Technician> technicians = new ArrayList<>();
        List<Requester> requesters = new ArrayList<>();

        Technician tech1 = new Technician(1, "Aaron", "Sierp", "aaron@fake.com", (new ArrayList<>()));
        Technician tech2 = new Technician(2, "Caleb", "Smith", "caleb@fake.com", (new ArrayList<>()));

        technicians.add(tech1);
        technicians.add(tech2);

        Requester req1 = new Requester(1, "Matt", "Pullom", "matt@example.com");
        Requester req2 = new Requester(2, "Thomas", "Phillips", "thomas@example.com");
        Requester req3 = new Requester(3, "Jeff", "Thao", "jeff@example.com");
        Requester req4 = new Requester(4, "Calvin", "Millet", "calvin@example.com");

        requesters.add(req1);
        requesters.add(req2);
        requesters.add(req3);
        requesters.add(req4);


        RepairTicket repairTicket1 = new RepairTicket(
                1,
                "Virus Removal",
                "Customer's laptop is infected with malware: perform diagnostics and virus removal..",
                TicketCategory.SOFTWARE,
                TicketPriority.HIGH,
                TicketStatus.OPEN,
                req1,
                tech1,
                (new ArrayList<>())
                );

        RepairTicket repairTicket2 = new RepairTicket(
                2,
                "Bad Power Supply",
                "Clients computer needs a new power supply installed",
                TicketCategory.HARDWARE,
                TicketPriority.LOW,
                TicketStatus.INPROGRESS,
                req2,
                tech2,
                (new ArrayList<>())
                );

        RepairTicket repairTicket3 = new RepairTicket(
                3,
                "Laptop Screen Replacement",
                "Replace clients laptop screen",
                TicketCategory.HARDWARE,
                TicketPriority.LOW,
                TicketStatus.INPROGRESS,
                req3,
                tech1,
                (new ArrayList<>())
                );

        RepairTicket repairTicket4 = new RepairTicket(
                4,
                "Reinstall OS",
                "Install Windows Pro on Client PC",
                TicketCategory.SOFTWARE,
                TicketPriority.LOW,
                TicketStatus.INPROGRESS,
                req4,
                tech2,
                (new ArrayList<>())
                );
        
        tech1.addTickets(repairTicket1);
        tech1.addTickets(repairTicket3);
        tech2.addTickets(repairTicket2);
        tech2.addTickets(repairTicket4);


        List<RepairTicket> tech1Tickets = new ArrayList<>();

        tech1Tickets = tech1.getTickets();

        for(RepairTicket ticket: tech1Tickets){
            String title = ticket.getTitle();
            TicketStatus status = ticket.getTicketStatus();

            System.out.println("Job: " + title);
            System.out.println("Status: " + status);

        }

        repairTicket2.changeTicketStatus(TicketStatus.CLOSED);

        repairTicket1.addNote("This is a new note");

        NotificationService notificationService = new StoreNotificationService();

        String newMessage = "this is a message.";

        notificationService.sendNotification(newMessage);
       // List<String> techNotes = new ArrayList<>();

        //techNotes = repairTicket1.getNotes();

       
        printTicketSummary(tech1Tickets);

    }

    public static void printTicketSummary(List<RepairTicket> ticketList){

        for(RepairTicket ticket : ticketList){
            System.out.println("===== Ticket: " + ticket.getTicketId() + " Summary ====");
            System.out.println("Title: " + ticket.getTitle());
            System.out.println("Description: " + ticket.getDescription());
            System.out.println("Category: " + ticket.getTicketCategory());
            System.out.println("Priority: " + ticket.getTicketPriority());
            System.out.println("Status: " + ticket.getTicketStatus());
            System.out.println("Technician: " + ticket.getTechnician().getLastName());
            System.out.println("Requested By: " + ticket.getTicketRequester().getFirstName() + " "
                                                + ticket.getTicketRequester().getLastName());
        }

    }
}
