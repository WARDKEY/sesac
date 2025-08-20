package _06_generic.practice;

class Calculator<T extends Number> {
    private T num1;
    private T num2;

    public Calculator(T num1, T num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public Double add() {
        return num1.doubleValue() + num2.doubleValue();
    }

    public T getNum1() {
        return num1;
    }
}


public class Pr02 {

    public static void main(String[] args) {
        Calculator<Integer> integerCalculator = new Calculator<>(10, 5);
        Calculator<Double> doubleCalculator = new Calculator<>(5.0, 0.64);

        System.out.println(integerCalculator.getNum1().getClass().getSimpleName() + " Sum: " + integerCalculator.add());
        System.out.println(doubleCalculator.getNum1().getClass().getSimpleName() + " Sum: " + doubleCalculator.add());

    }

}
