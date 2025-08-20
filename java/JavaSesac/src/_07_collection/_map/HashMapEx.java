package _07_collection._map;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class HashMapEx {

    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();

        // 객체 저장 put(key, value)
        map.put(1001, "홍킬동");
        map.put(1002, "킴민지");
        map.put(1003, "빡정은");
        map.put(1004, "성준향");
        map.put(1004, "성향");    // 수정이 됨

        System.out.println(map);

        // 요소의 개수
        System.out.println("map의 데이터 개수: " + map.size());

        // key로 접근
        int key = 1003;
        String value = map.get(key);
        System.out.printf("%d 번 학생의 이름은 %s", key, value);

        System.out.println();

        //// 순회 ////
        System.out.println("=== map 순회(1) entrySet()과 for 이용  ===");
        Set<Map.Entry<Integer, String>> entries = map.entrySet();
        System.out.println("entries = " + entries);
        // key=value 엔트리를 set에 저장한 것

        for (Map.Entry<Integer, String> entry : entries) {
            System.out.println(entry.getKey() + "번 학생: " + entry.getValue());
        }

        System.out.println();

        System.out.println("=== map 순회(2) entrySet()과 Iterator 객체 이용  ===");
        Iterator<Map.Entry<Integer, String>> entryIterator = entries.iterator();

        while (entryIterator.hasNext()) {
            Map.Entry<Integer, String> studentEntry = entryIterator.next();
            // studentEntry: 1001=홍킬동
            Integer entryKey = studentEntry.getKey();   // 1001
            String entryValue = studentEntry.getValue();    // 홍킬동
            System.out.printf("%d 번 학생: %s\n", entryKey, entryValue);
        }

        System.out.println();

        System.out.println("=== map 순회(3) keySet()과 for 이용  ===");

        Set<Integer> keySet = map.keySet();
        System.out.println("keySet = " + keySet);

        for (Integer k : keySet) {
            System.out.printf("%d 번 학생: %s\n", k, map.get(k));
        }

        System.out.println();

        // map 요소 삭제 (map 내의 entry 삭제)
        String deletedValue = map.remove(1003);
        System.out.println("삭제된 value = " + deletedValue);
        System.out.println("삭제 후 map: " + map);

    }
}
