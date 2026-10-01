
import java.util.ArrayList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class RepairTicketTest {

    Technician tech;
    Requester req;

    @BeforeEach
    void setup(){
        tech = new Technician(1, "Johnny", "Pain", "bringthepain@fake.com", (new ArrayList<>()));
        req = new Requester(1, "John", "Doe", "j.doe@fake.com");
    }

    @Test
    void validTicketCreation() {
        // ARRANGE
         
        // ACT

        RepairTicket repairTicket = new RepairTicket(
                1,
                "testTicket",
                "Test Description",
                TicketCategory.HARDWARE,
                TicketPriority.HIGH,
                TicketStatus.CLOSED,
                req,
                tech,
                (new ArrayList<>()));

        // ASSERT

        assertEquals(1, repairTicket.getTicketId());
        assertEquals("testTicket", repairTicket.getTitle());
        assertEquals("Test Description", repairTicket.getDescription());
        assertEquals(TicketCategory.HARDWARE, repairTicket.getTicketCategory());
        assertEquals(TicketPriority.HIGH, repairTicket.getTicketPriority());
        assertEquals(TicketStatus.CLOSED, repairTicket.getTicketStatus());
        assertEquals(req, repairTicket.getTicketRequester());
        assertEquals(tech, repairTicket.getTechnician());

    }

    @Test
    void invalidRepairTicketTest(){

        //ARRANGE

        
        //ACT + ASSERT

        assertThrows(IllegalArgumentException.class, ()->{
            
            new RepairTicket(
                -1,
                "testTicket",
                "Test Description",
                TicketCategory.HARDWARE,
                TicketPriority.HIGH,
                TicketStatus.CLOSED,
                req,
                tech,
                (new ArrayList<>()));
        });
    }

    @Test 
    void assignTechnicianUpdatesTicketsAndTechnician(){
        
        //Arrange

             RepairTicket repairTicket = new RepairTicket(
                1,
                "testTicket",
                "Test Description",
                TicketCategory.HARDWARE,
                TicketPriority.HIGH,
                TicketStatus.OPEN,
                req,
                tech,
                (new ArrayList<>()));
            
            StoreNotificationService storeNotificationService = new StoreNotificationService();    

            RepairTicketService repairTicketService = new RepairTicketService(storeNotificationService);

        //Act

        repairTicketService.assignTechnicianService(repairTicket, tech);

        //Assert

        assertEquals(tech, repairTicket.getTechnician());
        assertTrue(tech.getTickets().contains(repairTicket));
        assertTrue(!storeNotificationService.getStoreNotifications().isEmpty());
    }

    @Test
    void changeTicketStatus(){
        //Arrange

        RepairTicket repairTicket = new RepairTicket(
                1,
                "testTicket",
                "Test Description",
                TicketCategory.HARDWARE,
                TicketPriority.HIGH,
                TicketStatus.OPEN,
                req,
                tech,
                (new ArrayList<>()));

        //Act

        repairTicket.changeTicketStatus(TicketStatus.CLOSED);

        //Assert

        assertEquals(repairTicket.getTicketStatus(), TicketStatus.CLOSED);
    }

    @Test
    void changeClosedTicketPriorityLevel(){

        //Arrange

        RepairTicket repairTicket = new RepairTicket(
                1,
                "testTicket",
                "Test Description",
                TicketCategory.HARDWARE,
                TicketPriority.HIGH,
                TicketStatus.CLOSED,
                req,
                tech,
                (new ArrayList<>()));

        //Act + Assert

            assertThrows(IllegalStateException.class, () ->{
                repairTicket.changeTicketPriority(TicketPriority.LOW);
            });

    }
}
