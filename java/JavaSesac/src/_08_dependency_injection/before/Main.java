package _08_dependency_injection.before;

public class Main {
    public static void main(String[] args) {
        BoardService service = new BoardService();
        service.save();
        service.delete();
    }
}
