package codingon.spring_boot_default.controller._01_thymeleaf;

import java.util.Arrays;
import lombok.Getter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PracticeController {

    @GetMapping("/pr1")
    public String prAge(Model model) {
        int age = 12;
        model.addAttribute("bool", age < 20);
        model.addAttribute("age", age);
        return "_01_thymeleaf/pr.html";
    }

    @GetMapping("/people")
    public String prTable(Model model) {
        model.addAttribute("person", Arrays.asList(new Person("kim", 10), new Person("lee", 20), new Person("hong", 30),
                new Person("park", 40), new Person("shin", 50)));
        return "_01_thymeleaf/pr2.html";
    }

    @Getter
    class Person {
        private String name;
        private int age;

        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
    }
}
