package codingon.spring_boot_default.controller._02_restapi;


import codingon.spring_boot_default.dto.UserDTO;
import codingon.spring_boot_default.vo.UserVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RestControllers {

    // GET localhost:PORT/ 요청 시: _02_restapi/req.html 파일을 브라우저에 렌더링
    @GetMapping("/")
    public String getReq() {
        return "_02_restapi/req";
    }

    // GET 요청
    // #1
    @GetMapping("/get/res1")
    public String getRes1(@RequestParam(value = "name") String name, @RequestParam(value = "age") int age,
                          Model model) {
        // req ex) /get/res1?name=sean&age=1

        // @RequestParam 어노테이션
        // - HTTP 요청 파라미터를 메서드 매개변수에 바인딩
        // - query string 중에서 name key에 대한 value를 String name에 매핑
        // - required=true 가 기본값이므로 요청 URL 에서 name key를 필수로 보내야 함
        // 퀴즈. age 키 값을 보내지 않으면 에러가 발생하지만, name 키 값은 보내지 않아도 잘 동작 함
        // -> int는 primitive type 이지만, String은 빈 문자열도 유효한 값으로 취급되기 때문!
        System.out.println("name = " + name);
        System.out.println("age = " + age);

        // view에 전달할 데이터를 Model 객체에 추가
        model.addAttribute("name", name);
        model.addAttribute("age", age);

        // 응답 결과를 보여줄 뷰 이름 반환
        return "_02_restapi/res";
    }

    // #2
    @GetMapping("/get/res2")
    public String getRes2(@RequestParam(value = "name", required = false) String name, Model model) {
        System.out.println("name = " + name);

        model.addAttribute("name", name);

        return "_02_restapi/res";
    }

    // #3
    @GetMapping("/get/res3/{param1}/{param2}")
    public String getRes3(@PathVariable String param1, @PathVariable(value = "param2") int age, Model model) {

        // req ex) /get/res3/홍길동/20, /get/res3/홍길동
        System.out.println("name = " + param1);
        System.out.println("age = " + age);

        // PathVariable
        // - URL path variable을 사용할 때 필요한 어노테이션
        // - 기본적으로 path variable은 값을 가져야함 (즉, 값이 없으면 404 error)

        // 참고.  URL의 path variable과 해당 메서드의 매개변수명을 다르게 사용하고 싶다면?
        // ex. @PathVariable(value="param2") int age

        model.addAttribute("name", param1);
        model.addAttribute("age", age);

        return "_02_restapi/res";
    }

    // #4
    // 선택적으로 받아오는 path variable 이 있으면, {} 안에 여러 개 설정
    @GetMapping({"/get/res4/{name}/{age}", "/get/res4/{name}"})
    public String getRes4(@PathVariable String name, @PathVariable(required = false) Integer age, Model model) {

        // path variable 중에서 name은 필수 경로변수, age는 선택 경로변수 라면?
        // - required = false 옵션을 선택 경로 변수에서는 사용
        // - optional한 변수가 맨 뒤에 와야 함

        // 참고. 선택 경로변수 age의 타입이 int가 아니라 Integer 인 이유
        // - age (정수형) optional한 값이므로 null 이 가능
        // - primitive type (int)는 null 값을 가질 수 없음
        // - 따라서, reference type인 객체를 사용하고자 Integer 선언 (null 값이 들어올 수 있도록)
        System.out.println("name = " + name);
        System.out.println("age = " + age);

        model.addAttribute("name", name);
        model.addAttribute("age", age);

        return "_02_restapi/res";
    }

    // POST 전송
    // #5
    @PostMapping("/post/res1")
    public String postRes1(@RequestParam String name, @RequestParam int age, Model model) {

        System.out.println("name = " + name);
        System.out.println("age = " + age);

        model.addAttribute("name", name);
        model.addAttribute("age", age);

        return "_02_restapi/res";
    }

    // #6
    @PostMapping("/post/res2")
    public String postRes2(@RequestParam String name, @RequestParam(required = false) Integer age, Model model) {

        System.out.println("name = " + name);
        System.out.println("age = " + age);

        model.addAttribute("name", name);
        model.addAttribute("age", age);

        return "_02_restapi/res";
    }

    // #1~6 폼 까지는 항상 Template View를 반환
    // 하지만 Spring Boot 를 API 서버로 활용하고자 데이터 자체를 응답하고 싶다면?
    // => @ResponseBody 사용

    // #7
    @PostMapping("/post/res3")
    @ResponseBody   // 메서드의 반환값을 응답 본문 (response body)에 직접 쓰도록 지시
    public String postRes3(@RequestParam String name, @RequestParam Integer age, Model model) {
        // - @ResponseBody
        // - 응답 시 객체를 JSON 등으로 리턴할 때 사용
        // - 즉, 응답 객체를 전달 (node express res.send()와 유사)
        System.out.println("name = " + name);
        System.out.println("age = " + age);

        model.addAttribute("name", name);
        model.addAttribute("age", age);

        // 템플릿 엔진(res.html)이 아닌 문자열 그 자체를 응답
        return name + " " + age;
    }

    // DTO 이용
    // #8
    @GetMapping("/dto/res1")
    @ResponseBody
    public String dtoRes1(@ModelAttribute UserDTO userDTO) {
        // req ex) /dto/res1?name=sean&age=1

        // @ModelAttribute UserDTO userDTO
        // - 요청 파라미터를 DTO 객체에 바인딩
        // - 폼 input name 속성들 (name, age)이 userDTO 필드명과 일치하면 자동 매핑
        // -> 매핑? dto의 setter를 사용
        // -> ?name=s&age=1 -> setName("s"), setAge(1)
        System.out.println("userDTO (name)= " + userDTO.getName());
        System.out.println("userDTO (age) = " + userDTO.getAge());

        return userDTO.getName() + " " + userDTO.getAge();
    }

    @PostMapping("/dto/res2")
    @ResponseBody
    public String dtoRes2(UserDTO userDTO) {
        // @ModelAttribute 어노테이션 생략 가능
        // - 파라미터의 UserDTO 타입 앞에 아무것도 없으면 @ModelAttribute 어노테이션 자동 추가됨
        // - POST 방식이므로 폼 데이터를 자동으로 UserDTO에 바인딩
        System.out.println("userDTO (name)= " + userDTO.getName());
        System.out.println("userDTO (age) = " + userDTO.getAge());

        return userDTO.getName() + " " + userDTO.getAge();
    }

    @PostMapping("/dto/res3")
    @ResponseBody
    public String dtoRes3(@RequestBody UserDTO userDTO) {
        // @RequestBody 어노테이션
        // - 요청의 본문 (req.body)에 있는 데이터를 읽어와서 객체에 매핑
        //  -> 매핑? 필드에 값을 주입
        // - 반환 값을 HTTP 본문에 직접 작성하게 함
        // - (전제 조건) 단!!!!! 요청의 형식이 JSON 또는 XML일 때 사용 (하지만 지금 "일반 폼 전송")

        // 415 에러 발생
        // : 서버가 클라이언트로부터 받은 요청의 미디어 타입(Content-type)을 지원하지 않거나 이해할 수 없는 경우 발생하는 에러

        // 즉 해당 요청은  MIME Type이 "application/x-www-form-urlencoded"
        // -> @RequestBody 어노테이션 사용시 오류 발생

        // 오류가 안 나게 하려면?
        // 1. "일반 폼 전송"을 하고 있으니 @ModelAttribute를 사용 -> 9번 폼
        // 2. 클라이언트 측에서 js 코드를 사용해 폼 데이터를 json 변환하여 전송 -> 동적 폼 전송

        System.out.println("userDTO (name)= " + userDTO.getName());
        System.out.println("userDTO (age) = " + userDTO.getAge());

        return userDTO.getName() + " " + userDTO.getAge();
    }


    // VO 이용
    // #11
    @GetMapping("/vo/res1")
    @ResponseBody
    public String voRes1(@ModelAttribute UserVO userVO) {
        // @ModelAttribute UserVO userVO
        // - 요청 파라미터를 VO 객체에 바인딩

        // 참고. 브라우저에서 응답이 "null 0" 으로 도착하는 이유는?
        // - @ModelAttribute 는 setter를 이용해 객체에 값 주입
        // - vo 객체에는 setter가 없으므로 폼에서 전송된 데이터가 주입되지 않음
        // -> 따라서 name, age 필드는 초기화되지 않은 상태인 null, 0으로 남게 됨
        System.out.println("userVO {name} = " + userVO.getName());
        System.out.println("userVO {age} = " + userVO.getAge());

        return userVO.getName() + " " + userVO.getAge();
    }

    // #12
    @PostMapping("/vo/res2")
    @ResponseBody
    public String voRes2(UserVO userVO) {
        System.out.println("userVO {name} = " + userVO.getName());
        System.out.println("userVO {age} = " + userVO.getAge());

        return userVO.getName() + " " + userVO.getAge();
    }

    // #13
    @PostMapping("/vo/res3")
    @ResponseBody
    public String voRes3(@RequestBody UserVO userVO) {
        // @RequestBody UserVO userVO
        // -> 요청의 본문 데이터를 vo 객체로 변환 시도

        // #10 폼과 동일한 이유로 에러

        // 올바르게 사용?
        // 1. @RequestBody 어노테이션 제거 -> @ModelAttribute 사용
        // 2. 클라이언트 측에서 js 를 이용해 폼 데이터를 json 으로 변환해서 "동적 폼 전송" 구현
        System.out.println("userVO {name} = " + userVO.getName());
        System.out.println("userVO {age} = " + userVO.getAge());

        return userVO.getName() + " " + userVO.getAge();
    }

    // axios DTO
    @GetMapping("/axios/res1")
    @ResponseBody
    public String axiosRes1(@RequestParam String name, @RequestParam String age) {
        System.out.println("name = " + name);
        System.out.println("age = " + age);

        return "이름: " + name + ", 나이: " + age;
    }

    @GetMapping("/axios/res2")
    @ResponseBody
    public String axiosRes2(UserDTO userDTO) {
        System.out.println("userDTO (name) = " + userDTO.getName());
        System.out.println("userDTO (age) = " + userDTO.getAge());

        return "이름: " + userDTO.getName() + ", 나이: " + userDTO.getAge();
    }

    @PostMapping("/axios/res3")
    @ResponseBody
    public String axiosRes3(@RequestParam String name, @RequestParam String age) {
        System.out.println("name = " + name);
        System.out.println("age = " + age);

        return "이름: " + name + ", 나이: " + age;
    }

    @PostMapping("/axios/res4")
    @ResponseBody
    public String axiosRes4(UserDTO userDTO) {
        System.out.println("userDTO (name) = " + userDTO.getName());
        System.out.println("userDTO (age) = " + userDTO.getAge());

        return "이름: " + userDTO.getName() + ", 나이: " + userDTO.getAge();
    }

    @PostMapping("/axios/res5")
    @ResponseBody
    public String axiosRes5(@RequestBody UserDTO userDTO) {
        System.out.println("userDTO (name) = " + userDTO.getName());
        System.out.println("userDTO (age) = " + userDTO.getAge());

        return "이름: " + userDTO.getName() + ", 나이: " + userDTO.getAge();
    }

    // axios VO

    @GetMapping("/axios/vo/res1")
    @ResponseBody
    public String axiosVoRes1(@RequestParam String name, @RequestParam String age) {
        System.out.println("name = " + name);
        System.out.println("age = " + age);

        return "이름: " + name + ", 나이: " + age;
    }

    @GetMapping("/axios/vo/res2")
    @ResponseBody
    public String axiosVoRes2(UserVO userVO) {
        System.out.println("userVO (name) = " + userVO.getName());
        System.out.println("userVO (age) = " + userVO.getAge());

        return "이름: " + userVO.getName() + ", 나이: " + userVO.getAge();
    }

    @PostMapping("/axios/vo/res3")
    @ResponseBody
    public String axiosVoRes3(@RequestParam String name, @RequestParam String age) {
        System.out.println("name = " + name);
        System.out.println("age = " + age);

        return "이름: " + name + ", 나이: " + age;
    }

    @PostMapping("/axios/vo/res4")
    @ResponseBody
    public String axiosVoRes4(UserVO userVO) {
        System.out.println("userVO (name) = " + userVO.getName());
        System.out.println("userVO (age) = " + userVO.getAge());

        return "이름: " + userVO.getName() + ", 나이: " + userVO.getAge();
    }

    @PostMapping("/axios/vo/res5")
    @ResponseBody
    public String axiosVoRes5(@RequestBody UserVO userVO) {
        System.out.println("userVO (name) = " + userVO.getName());
        System.out.println("userVO (age) = " + userVO.getAge());

        return "이름: " + userVO.getName() + ", 나이: " + userVO.getAge();
    }

}
