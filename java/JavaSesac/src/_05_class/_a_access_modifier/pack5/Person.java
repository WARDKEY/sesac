package _05_class._a_access_modifier.pack5;

public class Person {
    private int age;
    private String name;

    // 생성자
    public Person(String name) {
        this.name = name;
    }

    // getter와 setter
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        // 필드에 직접 접근하면 아래처럼 예외처리는 불가능함
        if (age < 0) {
            this.age = 0;
            return;
        }
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
