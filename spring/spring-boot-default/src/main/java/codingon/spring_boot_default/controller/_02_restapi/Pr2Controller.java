package codingon.spring_boot_default.controller._02_restapi;

import codingon.spring_boot_default.dto.PersonDTO;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class Pr2Controller {

    @GetMapping("/form/pr")
    public String getForm() {
        return "_02_restapi/pr2";
    }

    @PostMapping("/form/pr")
    @ResponseBody
    public String sign_up(@RequestBody PersonDTO personDTO) {
        System.out.println(personDTO.getName());

        return "회원가입 성공";
    }




}
