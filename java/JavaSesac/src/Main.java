import java.util.Arrays;

public class Main {

    /**
     * public : 접근 제어자 (private, public, default, protected)
     * static : JVM이 main 함수를 곧바로 실행하도록 도와줌
     * void : main  함수의 리턴 타입, 리턴하는 것이 없음을 나타냄
     */

    public static void main(String[] args) {
        // 한 줄 쓸 때는 슬래시 두 개
        /**
         *  여러 줄 주석
         */
        System.out.println("안녕하세요.");

        // args 인자 확인
        System.out.println("arg's length: " + args.length);
        System.out.println(Arrays.toString(args));

        // main 함수 호출하는 법
        // java src/Main.java 11 22 33
    }
}