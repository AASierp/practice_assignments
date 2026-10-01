package com.example.repair_ticket.service;

import java.util.ArrayList;
import java.util.List;

public class StoreNotificationService implements NotificationService {

       private List<String> storeNotifications = new ArrayList<>();

       public List<String> getStoreNotifications(){
        return List.copyOf(storeNotifications);
       }

    @Override
    public void sendNotification(String message) {

        storeNotifications.add(message);
    } 
}
