package _01_basic_syntax;

import java.util.Scanner;

public class Pr_01 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("이름을 입력하세요.");
        String name = sc.nextLine();
        System.out.println("나이를 입력하세요.");
        int age = sc.nextInt();
        System.out.println("안녕하세요! " + name + "님 " + "(" + age + "세" + ")");
    }
}
