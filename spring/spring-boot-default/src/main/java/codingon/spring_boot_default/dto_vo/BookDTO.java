package codingon.spring_boot_default.dto_vo;

public class BookDTO {
    private String title;
    private String author;
    private int price;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return
                "제목:'" + title + '\'' +
                        ", 저자:'" + author + '\'' +
                        ", 가격:" + price
                ;
    }
}
