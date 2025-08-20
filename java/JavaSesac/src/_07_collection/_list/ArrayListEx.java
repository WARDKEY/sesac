package _07_collection._list;

import java.util.ArrayList;
import java.util.List;

public class ArrayListEx {
    public static void main(String[] args) {
        List<Book> list = new ArrayList<>();

        list.add(new Book("title1", "author1"));
        list.add(new Book("title2", "author2"));
        list.add(new Book("title3", "author3"));
        list.add(new Book("title4", "author4"));
        list.add(new Book("title5", "author5"));

        System.out.println(list);

        int size = list.size();

        System.out.printf("책은 총 %d권이 있어요.\n", size);

        // index 3번 요소 접근해서 얻어오기
        Book index3book = list.get(3);
        System.out.println("index3book = " + index3book);

        list.remove(3);
        list.remove(3);

        System.out.println("\n== 삭제 후 출력 ==");
        for (Book b : list) {
            System.out.println(b);
        }

        System.out.println("\n비어있나요? " + list.isEmpty());
        list.clear();
        System.out.println("비어있나요? " + list.isEmpty());

    }
}

class Book {
    private String title;
    private String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book{" +
                "title='" + title + '\'' +
                ", author='" + author + '\'' +
                '}';
    }
}
