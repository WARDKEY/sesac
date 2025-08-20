package _07_collection._list;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class CompareList {

    public static void main(String[] args) {
        List<String> list1 = new ArrayList<>();
        List<String> list2 = new LinkedList<>();

        long startTime;
        long endTime;

        startTime = System.nanoTime();

        for (int i = 0; i < 10000; i++) {
            list1.add(0, String.valueOf(i));
        }

        endTime = System.nanoTime();
        System.out.println("ArrayList 소요 시간: " + (endTime - startTime));

        startTime = System.nanoTime();

        System.out.println("\n=========================\n");

        for (int i = 0; i < 10000; i++) {
            list2.add(0, String.valueOf(i));
        }

        endTime = System.nanoTime();
        System.out.println("LinkedList 소요 시간: " + (endTime - startTime));

        /**
         * <pre>
         *  ArrayList 소요 시간: 5222447
         *  LinkedList 소요 시간: 1942822
         * </pre>
         *
         */

    }
}
