package _07_collection._set;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class HashSetEx {

    public static void main(String[] args) {
        Set<String> set1 = new HashSet<>();

        /**
         * HashSet: 저장되는 기준이 hashCode()
         * TreeSet: 저장되는 기준 '이진 탐색 트리'기반으로 저장 (오름차순)
         * LinkedHashSet: 저장되는 기준이 사용자가 삽입한 순서.
         */

        set1.add("apple");
        set1.add("banana");
        set1.add("orange");
        set1.add("kiwi");
        System.out.println("set1 = " + set1);

        set1.add("banana"); // 중복 객체 저장되지 않음
        System.out.println("\nset1 = " + set1);

        System.out.printf("set1에는 총 %d 종류의 과일이 있어요. \n", set1.size());

        System.out.println();
        /////
        Set<Course> set2 = new HashSet<>();
        Course java = new Course(101, "Java");
        Course js1 = new Course(102, "JavaScript");
        Course js2 = new Course(102, "JavaScript");

        System.out.println(java.hashCode());
        System.out.println(js1.hashCode());
        System.out.println(js2.hashCode());
        System.out.println(js1.equals(js2));
        System.out.println();

        set2.add(java);
        set2.add(js1);
        set2.add(js2);

        System.out.println("set2의 크기 = " + set2.size());    // 2 js1과 js2의 hashCode가 같음
        System.out.println();

        // set 순회하기 1. for-each
        System.out.println("=== 반복문으로 set2 객체 출력 ===");
        for (Course c : set2) {
            System.out.println("c = " + c);
        }

        // set 순회하기 2. iterator 사용
        System.out.println("=== iterator()으로 set2 객체 출력 ===");
        Iterator<Course> iterator = set2.iterator();
        /**
         * <pre>
         * - Iterator<E> iterator(): 요소를 순환하기 위한 Iterator<E> 객체를 반환
         * - boolena hasNext(): 순회하지 않은 요소가 있으면 true, 없으면 false
         * - E next(): Iterator 객체에서 다음 요소로 이동하고, 해당 요소를 반환
         * - void remove(): next()로 가져온 객체를 컬렉션에서 삭제
         * </pre>
         */
        while (iterator.hasNext()) {
            Course c = iterator.next();
            System.out.println("c = " + c);
        }

    }
}

class Course {
    private int id;
    private String title;

    public Course(int id, String title) {
        this.id = id;
        this.title = title;
    }

    @Override
    public int hashCode() {
        return title.hashCode() + id;
        // 똑같은 title, id 를 가질 때 동일한 hashCode를 반환하도록
    }


    @Override
    public boolean equals(Object obj) {
//        if (obj instanceof Course){
//            Course target = (Course) obj;
//        }

        if (obj instanceof Course target) {
            return target.id == id && title.equals(target.title);
        } else {
            return false;
        }


    }

    @Override
    public String toString() {
        return String.format("""
                Course{
                    id = %d,
                    title = %s
                    }
                """, id, title);
    }
}
