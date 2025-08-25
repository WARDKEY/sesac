package codingon.spring_boot_default.controller._01_thymeleaf;

import codingon.spring_boot_default.dto_vo.BookDTO;

public class BookMain {
    public static void main(String[] args) {
        BookDTO book1 = new BookDTO();
        book1.setTitle("Effective Java");
        book1.setAuthor("Joshua Bloch");
        book1.setPrice(35000);

        BookDTO book2 = new BookDTO();
        book2.setTitle("Clean Code");
        book2.setAuthor("Robert C. Martin");
        book2.setPrice(45000);

        System.out.println(book1);
        System.out.println(book2);
    }
}
