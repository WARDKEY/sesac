package _04_exception;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ExceptionEx {

    public static String divide(int x, int y) {
        // 나누기 함수
        return x + "/" + y + "=" + (x / y);
    }

    public static int getLength(String str) {
        // 문자열의 길이 반환
        return str.length();
    }

    public static int getValueByIdx(int[] arr, int idx) {
        // 배열의 요소를 반환
        return arr[idx];
    }

    public static void main(String[] args) {
        System.out.println(divide(6, 2));
//        System.out.println(divide(6, 0));   // > exception 발생
//        System.out.println("여기 도착");

        // ###### case 1. 0으로 나누기 [ArithmeticException]

        try {
            System.out.println("나누기 연산 시작");
            System.out.println(divide(6, 2));   // exception 발생
        } catch (ArithmeticException e) {
            // e.getMessage() : 에러가 발생한 이유
            System.out.println("나누기 중 에러 발생 >> " + e.getMessage()); // by zero
            // e.toString() : 에러가 발생한 이유, 예외의 종류
            System.out.println("나누기 중 에러 발생 >> " + e.toString());   // java.lang.ArithmeticException: / by zero
        } finally {
            System.out.println("나누기 연산 종료");
        }

        // ###### case 2. null에 접근하려고 할 때 [NullPointerException]

//        System.out.println("단어 길이 : " + getLength(new String("hello")));    // 5
//        System.out.println("단어 길이 : " + getLength(null));    // 에외 발생

        try {
            System.out.println("단어 길이 : " + getLength(null));    // 에외 발생

        } catch (NullPointerException e) {
            System.out.println("단어 길이 확인 중 에러 발생 >> " + e.getMessage());
            System.out.println("단어 길이 확인 중 에러 발생 >> " + e.toString());
        }

        System.out.println("여기까지");

        // ###### case 3. index 값으로 배열 접근 시 없는 범위로 접근 [ArrayIndexOutOfBoundsException]
        int[] numbers = {10, 20, 30, 40, 50};
//        System.out.println(getValueByIdx(numbers, 1));  // 20
//        System.out.println(getValueByIdx(numbers, 10));  // 예외 발생

        try {
            System.out.println(getValueByIdx(numbers, 10));  // 예외 발생
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("배열 인덱싱 중 에러 발생 >> " + e.getMessage());
            System.out.println("배열 인덱싱 중 에러 발생 >> " + e.toString());
        }

        // ###### case 4. 입력 형식 오류 [InputMismatchException]
        Scanner sc = new Scanner(System.in);
        try {
            System.out.println("정수를 입력하세요.");
            int number = sc.nextInt();
            System.out.println("정수 확인 : " + number);
        } catch (InputMismatchException e) {
            System.out.println("입력 형식 에러 발생 >> " + e.getMessage()); // null
            System.out.println("입력 형식 에러 발생 >> " + e.toString());   // 예외의 종류는 잘 나옴
        }
    }

    /**
     * 다양한 예외 처리 상황
     * 1. catch 여러 개 사용 가능
     * try{ ~ ~ ~
     * }catch(Exception1 e){
     * }catch(Exception2 e){
     * }catch(Exception3 e){
     * }
     * - 여로 개의 예외를 받아주는 경우, 각 예외마다 처리 방법이 다를 때
     *
     * 2. 하나의 catch에 exception을 여러 개 작성 가능
     * try{
     * }catch(Exception1 | Exception2 | Exception3 e){
     * }
     * - 여러 개의 에러를 받아줄 때 예외처리가 비슷한 경우 사용
     *
     * 3. Exception 이라는 전체 예외 타입 명시 가능
     * try{
     * }catch(Exception e){
     * }
     * - 웬만하면 디테일한 에러 종류 명시
     */
}
