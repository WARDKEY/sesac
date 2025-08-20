package _07_collection.practice;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Pr02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Map<String, Integer> map = new HashMap<>();

        System.out.println("이름과 나이를 입력하세요. '종료'를 입력하면 종료됩니다.");

        while (true) {
            System.out.print("이름 입력: ");
            String name = sc.next();

            if (name.equals("종료")) {
                break;
            }

            System.out.print("나이 입력: ");
            int age = sc.nextInt();


            map.put(name, age);
        }

        System.out.println("== 입력 받은 이름과 나이 목록 ==");
        for (String s : map.keySet()) {
            System.out.println("이름: " + s + ", 나이: " + map.get(s));
        }

    }
}
