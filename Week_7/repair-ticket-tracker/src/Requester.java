

public class Requester {
    
    private int id;
    private String firstName;
    private  String lastName;
    private String email;

    public Requester(int id, String first_name, String last_name, String email) {
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
    }

    public int getRequesterId(){
        return id;
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

}
