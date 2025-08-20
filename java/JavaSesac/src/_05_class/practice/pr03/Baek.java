package _05_class.practice.pr03;

public class Baek extends Student {
    public Baek(String name, String school, int age, int studentNumber) {
        super(name, school, age, studentNumber);
    }

    @Override
    void todo(String food) {
        System.out.println("=== " + getName() + " 학생의 정보 ===");
        System.out.println("학교: " + getSchool() + " 고등학교");
        System.out.println("나이: " + getAge());
        System.out.println("학번: " + getStudentNumber());
        System.out.println("점심은 " + food);
    }

}
