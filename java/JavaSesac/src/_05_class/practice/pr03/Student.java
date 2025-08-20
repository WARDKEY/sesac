package _05_class.practice.pr03;

public abstract class Student {
    private String name;
    private String school;
    private int age;
    private int studentNumber;

    public Student(String name, String school, int age, int studentNumber) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.studentNumber = studentNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(int studentNumber) {
        this.studentNumber = studentNumber;
    }

    abstract void todo(String food);
}
