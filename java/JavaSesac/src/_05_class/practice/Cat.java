package _05_class.practice;

public class Cat extends Animal {

    public Cat(String name, int age) {
        super("고양이", name, age);
    }

    @Override
    public void makeSound() {
        super.makeSound();
        System.out.println("야옹");
    }
}
