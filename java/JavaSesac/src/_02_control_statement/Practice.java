package _02_control_statement;

import java.util.Scanner;

public class Practice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("숫자를 입력하세요.");
        int num = sc.nextInt();

        for (int i = 1; i <= num; i++) {
            System.out.print(i + " ");
        }

    }
}
