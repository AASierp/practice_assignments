package com.example.repair_ticket.service;
import org.springframework.stereotype.Service;


@Service 
public class ConsoleNotificationService implements NotificationService {

    @Override
    public void sendNotification(String message) {
        System.out.println(message);
    }
}
