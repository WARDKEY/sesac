package codingon.spring_boot_default.controller._02_restapi;

import codingon.spring_boot_default.dto.PeopleDTO;
import codingon.spring_boot_default.dto.UpdateDTO;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class Pr3Controller {

    List<People> peoples = new ArrayList<>();

    @PostMapping("/sign_up")
    public String sign_up(PeopleDTO peopleDTO) {

        for (People p : peoples) {
            if (p.getUserId().equals(peopleDTO.getUserId())) {
                throw new IllegalArgumentException("이미 가입된 사용자입니다.");
            }
        }

        People people = new People();
        people.setId((long) peoples.size() + 1);
        people.setUserId(peopleDTO.getUserId());
        people.setPassword(peopleDTO.getPassword());

        peoples.add(people);

        return people.getUserId() + "회원가입 성공";
    }

    @PostMapping("/login")
    public String login(PeopleDTO peopleDTO) {
        for (People p : peoples) {
            if (p.getUserId().equals(peopleDTO.getUserId()) && p.getPassword().equals(peopleDTO.getPassword())) {
                return "로그인 성공";
            }
        }

        return "로그인 실패";
    }

    @PatchMapping("/{id}")
    public String updateUserInfo(@PathVariable("id") Long id, UpdateDTO updateDTO) {
        for (People p : peoples) {
            if (p.getId().equals(id)) {
                p.setPassword(updateDTO.getPassword());
                return "유저정보 수정 성공";
            }
        }
        return "유저정보 수정 실패";
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        for (People p : peoples) {
            if (p.getId().equals(id)) {
                peoples.remove(p);
                return "회원 탈퇴 성공";
            }
        }
        return "회원 탈퇴 실패";
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    class People {
        private Long id;
        private String userId;
        private String password;
    }

}


