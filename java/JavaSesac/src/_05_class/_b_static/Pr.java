package _05_class._b_static;

public class Pr {
    public static void main(String[] args) {
        Student s1 = new Student("김새싹", 20231001, 1);
        Student s2 = new Student("박지은", 20231002, 2);
        Student s3 = new Student("이은지", 20231003, 3);

        s1.displayInfo();
        s2.displayInfo();
        s3.displayInfo();

        System.out.println("총 학생 수는 " + Student.getTotalStudents() + "명 입니다.");

    }
}


class Student {
    private String name;
    private int student_ID;
    private int grade;
    private static int totalStudents;

    public Student(String name, int student_ID, int grade) {
        this.name = name;
        this.student_ID = student_ID;
        this.grade = grade;

        totalStudents++;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getStudent_ID() {
        return student_ID;
    }

    public void setStudent_ID(int student_ID) {
        this.student_ID = student_ID;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public static int getTotalStudents() {
        return totalStudents;
    }

    public static void setTotalStudents(int totalStudents) {
        Student.totalStudents = totalStudents;
    }

    public void displayInfo() {
        System.out.println("== 학생 정보 ==");
        System.out.println("이름: " + name);
        System.out.println("학번: " + student_ID);
        System.out.println("학년: " + grade);
        System.out.println();
    }

}