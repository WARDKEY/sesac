package _08_dependency_injection.pr;

public class SMSNotificationService implements NotificationService {
    @Override
    public void notifify() {
        System.out.println("Sending SMS notification: Your order has been processed");
    }
}
