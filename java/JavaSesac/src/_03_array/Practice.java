package _03_array;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Practice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        List<String> list = new ArrayList<>();

       while (true){
           System.out.println("문자를 입력해주세요. :");
           String s = sc.nextLine();
           if (s.equals("exit")){
               break;
           }
           list.add(s);
       }

       for (String s : list){
           System.out.println(s);
       }

    }
}
