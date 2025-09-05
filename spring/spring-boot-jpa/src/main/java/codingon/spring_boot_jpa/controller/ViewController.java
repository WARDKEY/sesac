package codingon.spring_boot_jpa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class ViewController {

    // GET / 요청 시 /users 경로로 리다이렉트
    @GetMapping("/")
    public String redirectToUsers() {
        return "redirect:/users";
    }

    // GET /users 요청 시 userList.html 템플릿 뷰 반환
    @GetMapping("/users")
    public String userList() {
        return "userList";
    }

    // GET /users/new 요청 시 userForm.html 템플릿 뷰 반환 ("Create User")
    @GetMapping("/users/new")
    public String userForm() {
        return "userForm";
    }

    // GET /users/유저아이디/edit 요청 시 userForm.html 템플릿 뷰 반환 ("Edit User")
    @GetMapping("/users/{id}/edit")
    public String userFormEdit(@PathVariable("id") Long id) {
        return "userForm";
    }

    @GetMapping("/boards")
    public String boardList() {
        return "boardList";
    }

    // GET /users/new 요청 시 userForm.html 템플릿 뷰 반환 ("Create User")
    @GetMapping("/boards/new")
    public String boardForm() {
        return "boardForm";
    }

    // GET /users/유저아이디/edit 요청 시 userForm.html 템플릿 뷰 반환 ("Edit User")
    @GetMapping("/boards/{id}/edit")
    public String boardFormEdit(@PathVariable("id") Long id) {
        return "boardForm";
    }
}
