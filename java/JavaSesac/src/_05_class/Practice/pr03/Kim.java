package _05_class.Practice.pr03;

public class Kim extends Student {

    public Kim(String name, String school, int age, int studentNumber) {
        super(name, school, age, studentNumber);
    }

    @Override
    void todo(String food) {
        System.out.println();
        System.out.println("=== " + getName() + " 학생의 정보 ===");
        System.out.println("학교: " + getSchool() + " 고등학교");
        System.out.println("나이: " + getAge());
        System.out.println("학번: " + getStudentNumber());
        System.out.println("점심은 " + food);
    }

    public static void main(String[] args) {
        Student kim = new Kim("김철수", "ABC", 17, 20220001);
        kim.todo("김가네 김밥");

        Student baek = new Kim("백영희", "XYZ", 18, 20220002);
        baek.todo("백종원 피자");

    }
}
