package _07_collection._list;

import java.util.LinkedList;
import java.util.List;

public class LinkedListEx {
    public static void main(String[] args) {
        List<String> list = new LinkedList<>();
        list.add("apple");
        list.add("banana");
        list.add("cherry");
        System.out.println("초기 linked list: " + list);  // [apple, banana, cherry]

        // addFirst(), addLast() : LinkedList에 특화된 메서드
        list.addFirst("grape");
        list.addLast("orange");
        System.out.println("요소 추가 후: " + list);

        list.add(2, "kiwi");
        System.out.println("중간 요소 추가 후: " + list);

        list.remove("banana");
        System.out.println("banana 삭제 후: " + list);

        String first = list.removeFirst();
        String last = list.removeLast();

        System.out.println("삭제된 요소 = " + first);
        System.out.println("삭제된 요소 = " + last);
        System.out.println("삭제 후 list = " + list);

        ////// 요소 검색 //////
        boolean containsCherry = list.contains("cherry");   // true
        int indexOfCherry = list.indexOf("cherry"); // 2

        System.out.println("cherry 포함 여부 = " + containsCherry);
        System.out.println("cherry 인덱스 번호 = " + indexOfCherry);

        System.out.println();

        /// Linked List 순회 ///
        for (String f : list) {
            System.out.println("fruit = " + f);
        }
        System.out.println();

        System.out.println("Linked List의 크기 = " + list.size());
        list.clear();
        System.out.println("Linked List의 크기 = " + list.size());


    }
}
