package _08_dependency_injection.pr;

public class Main {
    public static void main(String[] args) {
        NotificationService emailNotificationService = new EmailNotificationService();

        OrderService orderService = new OrderService(emailNotificationService);
        orderService.processOrder();

        NotificationService smsNotificationService = new SMSNotificationService();

        System.out.println("---");

        orderService.setNotificationService(smsNotificationService);
        orderService.processOrder();

    }
}
