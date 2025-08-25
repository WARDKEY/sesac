package codingon.spring_boot_default.dto_vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// DTO
// -> 단순히 데이터를 전송하기 위한 목적으로 사용
// getter, setter 정도만을 가짐 (비즈니스 로직 미포함)
//@Getter
//@Setter
//@ToString
@Data   // @Getter, @Setter, @ToString 등의 어노테이션 포함
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private int age;

//    // 기본 생성자
//    public UserDTO() {
//    }
//
//    // 모든 필드를 갖는 생성자
//    public UserDTO(Long id, String username, String email, int age) {
//        this.id = id;
//        this.username = username;
//        this.email = email;
//        this.age = age;
//    }
//
//    // getter, setter
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public int getAge() {
//        return age;
//    }
//
//    public void setAge(int age) {
//        this.age = age;
//    }
//
//    @Override
//    public String toString() {
//        return "UserDTO{" +
//                "id=" + id +
//                ", username='" + username + '\'' +
//                ", email='" + email + '\'' +
//                ", age=" + age +
//                '}';
//    }
}
