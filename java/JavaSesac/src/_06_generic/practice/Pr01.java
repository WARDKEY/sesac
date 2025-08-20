package _06_generic.practice;

class Pair<K, V> {
    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public K getKey() {
        return key;
    }

    public V getValue() {
        return value;
    }

    @Override
    public String toString() {
        return
                "key: " + key +
                        ", value: " + value
                ;
    }
}


public class Pr01 {
    public static void main(String[] args) {
        Pair<String, Integer> pair1 = new Pair<>("One", 1);
        Pair<Integer, String> pair2 = new Pair<>(2, "Two");

        System.out.println(pair1);
        System.out.println(pair2);

    }
}
