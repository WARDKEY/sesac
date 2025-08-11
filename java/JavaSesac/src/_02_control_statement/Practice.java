package _02_control_statement;

import java.util.Scanner;

public class Practice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] numbers = sc.nextLine().split(" ");

        int r = Integer.parseInt(numbers[0]);
        int a = Integer.parseInt(numbers[1]);
        int b = Integer.parseInt(numbers[2]);
        int c = Integer.parseInt(numbers[3]);
        int d = Integer.parseInt(numbers[4]);

        System.out.println("반지름이 " + r + "인 원의 넓이: " + extent(r));
        System.out.println("가로 " + a + ", 세로 " + b + "인 " + "직사각형의 넓이: " + extent(a, b));
        System.out.println("밑변 " + c + ", 높이 " + d + "인 " + "삼각형의 넓이: " + extent(c, d, 2));

    }

    public static double extent(double num) {
        return Math.pow(num, 2) * 3.14;
    }

    public static double extent(double num1, double num2) {
        return num1 * num2;
    }

    public static double extent(double num1, double num2, int n) {
        return (num1 * num2) / n;
    }


}
