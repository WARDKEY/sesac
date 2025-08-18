package _05_class.Practice;

public class Animal {
    private String species;
    private String name;
    private int age;

    public Animal(String species, String name, int age) {
        this.species = species;
        this.name = name;
        this.age = age;
    }

    public void makeSound() {
        System.out.println("동물은 소리를 낸다.");
    }

    public static void main(String[] args) {
        Animal cat = new Cat("cat", 12);
        Animal dog = new Dog("dog", 11);

        cat.makeSound();
        dog.makeSound();

    }
}
