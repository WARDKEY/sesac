package _05_class._d_inheritance;

// 부모 클래스
public class Person {
    // Case 1. public 필드인 경우
//    public String name;
//    public int age;
//
//    public Person() {
//        System.out.println("부모 클래스 생성자인 Person() 이 실행됨");
//    }

    public void say() {
        System.out.println("안녕!");
    }

    public void eat(String food) {
        System.out.println(food + "를(을) 먹고 있음");
    }

    // Case 2. private 필드인 경우
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // getter와 setter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
