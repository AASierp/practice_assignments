import java.util.ArrayList;
import java.util.List;


public class Technician {
    
    private int employeeId;
    private String firstName;
    private String lastName;
    private String email;
    private List<RepairTicket> tickets = new ArrayList<>();

    public Technician(int employeeId,
             String firstName, 
             String lastName, 
             String email, 
             List<RepairTicket> tickets){

        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.tickets = tickets;
    }

    public int getEmployeeId(){
        return employeeId;
    }

    public String getFirstName(){
        return firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public String getEmail(){
        return email;
    }

    public List<RepairTicket> getTickets(){
        return tickets;
    }

    public void addTickets(RepairTicket ticket){
        tickets.add(ticket);
    }

}

