package _06_generic;

import java.util.ArrayList;

class CustomList {
    // 필드: list
    ArrayList<String> list = new ArrayList<>();

    // 메서드: 요소 추가, 요소 삭제, 요소 접근
    public void addElement(String element) {
        list.add(element);
    }

    public void removeElement(String element) {
        list.remove(element);
    }

    public String get(int i) {
        return list.get(i);
    }

    @Override
    public String toString() {
        return "CustomList{" +
                "list=" + list +
                '}';
    }
}

class CustomListGeneric<T> {
    ArrayList<T> list = new ArrayList<>();

    public void addElement(T element) {
        list.add(element);
    }

    public void removeElement(T element) {
        list.remove(element);
    }

    public T get(int i) {
        return list.get(i);
    }

    @Override
    public String toString() {
        return "CustomListGeneric{" +
                "list=" + list +
                '}';
    }
}

public class GenericEx {
    public static void main(String[] args) {
        CustomList li = new CustomList();
        li.addElement("first");
        li.addElement("second");
        li.addElement("third");
        System.out.println(li.toString());  // CustomList{list=[first, second, third]}

        li.removeElement("second");
        System.out.println(li.toString());  // CustomList{list=[first, third]}

        System.out.println(li.get(0));  // first

        System.out.println("\n=== Generic 이용 클래스를 통해 인스턴스 생성 ===");

        // 클래스이름<사용할 타입> 변수명 = new 생성자 이름<>();
        // 사용할 타입은 반드시 reference type
        CustomListGeneric<Integer> genericList = new CustomListGeneric<>();
        genericList.addElement(10);
        genericList.addElement(20);
        genericList.addElement(30);

        System.out.println(genericList.toString()); // CustomListGeneric{list=[10, 20, 30]}
        System.out.println(genericList.get(2));

        genericList.removeElement(20);
        System.out.println(genericList.toString()); // CustomListGeneric{list=[10, 30]}

        System.out.println("\n === char형 리스트 ===");
        CustomListGeneric<Character> charList = new CustomListGeneric<>();
        charList.addElement('A');
        charList.addElement('가');
        charList.addElement('@');
        charList.addElement('1');
        System.out.println(charList.toString());


    }
}
