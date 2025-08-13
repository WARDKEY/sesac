package _04_exception;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class Pr {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> list = new ArrayList<>();

        System.out.print("배열 크기를 입력하세요 : ");
        try {
            int size = sc.nextInt();
            int[] arr = new int[size];
            System.out.println(size + "개의 정수를 입력하세요.");

            for (int i = 0; i < size; i++) {
                System.out.print("정수 " + (i + 1) + ": ");
                arr[i] = sc.nextInt();
            }

            for (int i = 0; i < size; i++) {
                for (int j = i + 1; j < size; j++) {
                    if (arr[i] == arr[j] && !list.contains(arr[i])) {
                        list.add(arr[i]);
                    }
                }
            }

            System.out.println("중복된 요소 : " + list);

        } catch (InputMismatchException e) {
            System.out.println("잘못된 입력입니다.");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("배열의 범위를 벗어났습니다.");
        }
    }
}