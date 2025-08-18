package _05_class.Practice;

public class Dog extends Animal {
    public Dog(String name, int age) {
        super("강아지", name, age);
    }

    @Override
    public void makeSound() {
        super.makeSound();
        System.out.println("멍멍");
    }

}
