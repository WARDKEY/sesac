package _05_class;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Rectangle {

    public static void main(String[] args) {

        List<Rectangle> rect = new ArrayList<>();
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
            String[] str = sc.nextLine().split(" ");

            if (str[0].equals("0") && str[1].equals("0")) {
                break;
            }

            Rectangle rectangle = new Rectangle(Integer.parseInt(str[0]));
            rectangle.setHeight(Integer.parseInt(str[1]));

            rect.add(rectangle);
        }

        for (Rectangle r : rect) {
            System.out.println("가로 길이는: " + r.getWidth());
            System.out.println("세로 길이는: " + r.getHeight());
            System.out.println("넓이는: " + r.area());
            System.out.println("----------------------------");
        }

    }


    private int width;
    private int height;

    public Rectangle(int width) {
        this.width = width;
    }

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int area() {
        return width * height;
    }
}
