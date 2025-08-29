package _08_dependency_injection.pr;

public class OrderService {

    private NotificationService notificationService;

    public OrderService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void setNotificationService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void processOrder() {
        System.out.println("Order processed successfully");
        notificationService.notifify();
    }
}
