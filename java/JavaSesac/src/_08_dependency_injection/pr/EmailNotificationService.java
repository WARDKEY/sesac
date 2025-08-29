package _08_dependency_injection.pr;

public class EmailNotificationService implements NotificationService {
    @Override
    public void notifify() {
        System.out.println("Sending email notification: Your order has been processed");
    }
}
