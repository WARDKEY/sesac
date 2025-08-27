package codingon.spring_boot_default.controller._02_restapi;

import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PrController {

    @GetMapping("introduce/{name}")
    @ResponseBody
    public String getIntroduce(@PathVariable String name) {
        return "내 이름은 " + name;
    }

    @GetMapping("introduce2/{name}/{age}")
    @ResponseBody
    public String getIntroduce2(@PathVariable String name, @PathVariable Integer age) {

        return "내 이름은 " + name + "\n" + "내 나이는 " + age;
    }

    @GetMapping("/form")
    public String getForm() {
        return "_02_restapi/pr";
    }

    @PostMapping("/form")
    @ResponseBody
    public String postForm(@RequestParam String name,
                           @RequestParam String gender,
                           @RequestParam String year,
                           @RequestParam String month,
                           @RequestParam String day,
                           @RequestParam List<String> hobby) {
        return "이름 : " + name + "<br/>" +
                "성별 : " + gender + "<br/>" +
                "생년월일 : " + year + "-" + month + "-" + day + "<br/>" +
                "관심사 : " + String.join(", ", hobby);
    }
}
