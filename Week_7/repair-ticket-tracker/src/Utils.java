import java.util.List;

public class Utils {
    

    public void ListTechnicians(List<Technician> technicians){
        for(Technician tech: technicians){
            System.out.println(tech.getFirstName() + " " + tech.getLastName());
        }
    }

    public static void nullChecker(Object value){

        if(value == null){
            throw new IllegalStateException("Please provide an acceptible value.");
        }
    }

    public static void consoleNotificationService(){
        
    }

}

