package codingon.spring_boot_default.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PersonDTO {
    private String name;
    private String gender;
    private int year;
    private int month;
    private int day;
    private String hobby;

}
