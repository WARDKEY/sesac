package _05_class._d_inheritance;

public class Student extends Person {
    // case 1. 부모의 필드가 public인 경우
//    public String campus;
//
//    public Student(String name, int age, String campus) {
//        // super(); // 매개변수 전달하지 않을 때에는 생략 가능
//        this.campus = campus;
//        this.age = age; // 부모의 필드이지만 public 이기 때문에 직접 접근 가능
//        this.name = name;
//        System.out.println("자식 클래스 생성자 Student(name, age, campus)가 실행됐어요.");
//    }
//
//    public void setCampus(String campus) {
//        this.campus = campus;
//        System.out.println(campus + " 캠퍼스에서 공부 중입니다.");
//    }

    // Case 2. 부모의 필드가 private인 경우

    private String campus;

    public Student(String name, int age) {
        super(name, age);   // 매개변수 전달하는 경우, 생략 불가!!
    }

    public String getCampus() {
        return campus;
    }

    public void setCampus(String campus) {
        this.campus = campus;
    }
}
