import java.util.ArrayList;
import java.util.List;

public class RepairTicket {

    //FIELDS

    private int ticketId;
    private String title;
    private String description;
    private TicketCategory category;
    private TicketPriority priority;
    private TicketStatus status;
    private Requester requester;
    private Technician technician;
    private List<String> notes = new ArrayList<>() {
        
    };

    //CONSTRUCTORS
    
    public RepairTicket(int ticketId, 
                        String title, 
                        String description, 
                        TicketCategory category, 
                        TicketPriority priority,
                        TicketStatus status,
                        Requester requester,
                        Technician technician,
                        List<String> notes) {
        
        if(ticketId <= 0){
            throw new IllegalArgumentException("Id must be a positive number.");
        }

        if(title == null || title.isBlank()){
            throw new IllegalArgumentException("You must provide a title");
        }

        Utils.nullChecker(description);

        if(description.length() > 500 || description.length() < 10){
            throw new IllegalArgumentException("Description must be between 100 and 500 characters.");
        }

        Utils.nullChecker(category);

        Utils.nullChecker(priority);

        Utils.nullChecker(status);

        Utils.nullChecker(requester);

        Utils.nullChecker(technician);

        this.ticketId = ticketId;
        this.title = title;
        this.description = description;
        this.category = category;
        this.priority = priority;
        this.status = status;
        this.requester = requester;
        this.technician = technician;
        this.notes = new ArrayList<>(notes);
    }

    //GETTERS

    public int getTicketId(){
        return ticketId;
    }

    public String getTitle(){
        return title;
    }

    public String getDescription(){
        return description;
    }

    public TicketCategory getTicketCategory(){
        return category;
    }

    public TicketPriority getTicketPriority(){
        return priority;
    }

    public TicketStatus getTicketStatus(){
        return status;
    }

    public Requester getTicketRequester(){
        return requester;
    }

    public Technician getTechnician(){
        return technician;
    }

    public List<String> getNotes(){
        return List.copyOf(notes); // a static method!!! 8)
    }

    //METHODS


    public void changeTicketStatus(TicketStatus ticketStatus){

        Utils.nullChecker(ticketStatus);

        if(this.status == TicketStatus.CLOSED){
            throw new IllegalStateException("If a ticket's status is 'CLOSED', it may not be changed.");
        }

        this.status = ticketStatus;
    }

    public void assignTechnician(Technician technician){

        Utils.nullChecker(technician);

        if(this.status == TicketStatus.CLOSED){
            throw new IllegalStateException("You cannot modify a closed ticket");
        }
        this.technician = technician;
    }


    public void assignRequester(Requester requester){

        Utils.nullChecker(requester);

        this.requester = requester;
    }

    public void changeTicketPriority(TicketPriority ticketPriority){

        Utils.nullChecker(ticketPriority);

        if(this.status == TicketStatus.CLOSED){
            throw new IllegalStateException("You cannot modify a Closed ticket");
        }
        this.priority = ticketPriority;
    }

    public boolean isClosed(){
        if(this.status == TicketStatus.CLOSED){
            return true;
        }
        return false;
    }

    public void addNote(String note){

        Utils.nullChecker(note);

        if(note.isBlank()){
            throw new IllegalArgumentException("You cannot provide a blank note");
        }

          notes.add(note);
    }
}
