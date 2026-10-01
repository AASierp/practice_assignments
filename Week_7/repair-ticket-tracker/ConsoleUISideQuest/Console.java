import java.util.Scanner;
import java.util.List;


public class Console {
    public void run(){
        boolean running = true;
        while(running){
            menu();

            Scanner scanner = new Scanner(System.in);
            
            String userSelection = scanner.nextLine();

            if(userSelection == "1"){
             
            }
             
        }
      

    }

    public void menu(){

        System.out.println("Welcome Too:");
        System.out.println("My Ticket Manager!");
        System.out.println("Please Select From The Following Menu Options - ");
        System.out.println("1. Create Ticket");
        System.out.println("2. List All Tickets");
        System.out.println("3. Print Ticket Summary");
        System.out.println("4. List Available Technicians");
        System.out.println("5. Assign Ticket To Technician");
        System.out.println("6. Change Ticket Status");

    }

    public void createTicket(List<Technician> technicians){

        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome To Ticket Creation:");
        System.out.println("Please provide an id: ");
        String id = scanner.nextLine();
        System.out.println("Please Provide A Title: ");
        String title = scanner.nextLine();
        System.out.println("Please Provide A Description: ");
        String Description = scanner.nextLine();
        System.out.println("Please Provide A Category: ");
        System.out.println("Choose A Number: 1. Hardware 2. Software");
        String category = scanner.nextLine();
        

        if(!category.equals("1") && !category.equals("2") ){
            throw new IllegalArgumentException("Please choose 1 or 2");
        }

        TicketCategory ticketCategory;

        if(category.equals("1")){
            ticketCategory = TicketCategory.HARDWARE;
        }else{
            ticketCategory = TicketCategory.SOFTWARE;
        }

        System.out.println("Please Choose A Priority Level: ");
        System.out.println("Choose A Number: 1. Low, 2. Medium, 3. High ");
        String priority = scanner.nextLine();

        if(!priority.equals("1") && !priority.equals("2") && !priority.equals("3")){
            throw new IllegalArgumentException("Please choose 1, 2 or 3");
        }

        TicketPriority ticketPriority;

        if(priority.equals("1")){
            ticketPriority = TicketPriority.LOW;
        }
        else if(priority.equals("2")){
            ticketPriority = TicketPriority.MEDIUM;
        }
        else{
            ticketPriority = TicketPriority.HIGH;
        }

        System.out.println("Please Assign A Technician: ");
        System.out.println("Avialable Technicians: ");

        String technician = scanner.nextLine();

        String requester = scanner.nextLine();

        scanner.close();
    }
}
