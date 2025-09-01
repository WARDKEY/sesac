package codingon.spring_boot_mybatis.controller;


import codingon.spring_boot_mybatis.dto.UserDTO;
import codingon.spring_boot_mybatis.service.UserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// - 해당 클래스 "모든 메서드"의 반환 값이 자동으로 JSON 형식으로 변환되어 HTTP 응답 본문에 포함
// - @Controller, @ResponseBody를 결합한 어노테이션
@RequestMapping("/api/users")   // 해당 클래스의 기본 요청 경로를 지정
@RequiredArgsConstructor
public class UserController {

    // Controller 계층은 Service 계층을 사용 -> 의존
    private final UserService userService;

    // POST /api/users : 새 사용자를 생성하고 생성된 사용자 정보 반환
    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        // @RequestBody : HTTP 요청 본문을 자바 객체로 변환
        userService.createUser(userDTO);
        return userDTO;
    }

    // 모든 사용자 정보를 리스트 반환
    // GET /api/users
    @GetMapping
    public List<UserDTO> listUsers() {
        return userService.getAllUsers();
    }

    // GET /api/users/:id : 특정 ID의 사용자 정보 반환
    @GetMapping("/{id}")
    public UserDTO getUser(@PathVariable("id") Long id) {
        return userService.getUserById(id);
    }

    // PUT /api/users/:id : 특정 ID의 사용자 정보 업데이트 하고 업데이트된 정보를 반환
    @PutMapping("/{id}")
    public UserDTO updateUser(@PathVariable("id") Long id, @RequestBody UserDTO userDTO) {
        userDTO.setId(id);  // DTO에 id 없어서 지정
        userService.updateUser(userDTO);
        return userDTO;
    }

    // DELETE /api/users/:id : 특정 ID의 사용자 정보 삭제
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
    }
}
