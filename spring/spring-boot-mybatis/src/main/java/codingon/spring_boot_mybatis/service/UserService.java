package codingon.spring_boot_mybatis.service;

import codingon.spring_boot_mybatis.domain.User;
import codingon.spring_boot_mybatis.dto.UserDTO;
import codingon.spring_boot_mybatis.mapper.UserMapper;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    // UserService가 UserMapper를 사용하기에
    // UserMapper 인터페이스 구현체를 자동 주입
    private final UserMapper userMapper;

    // 새 사용자 생성
    public void createUser(UserDTO userDTO) {
        // dto -> domain
        userMapper.insert(convertToEntity(userDTO));    // domain을 기반으로 mapper한테 insert를 요청
    }

    // 모든 사용자의 정보(DB로부터 읽어온 domain.User 리스트)를 UserDTO로 반환
    public List<UserDTO> getAllUsers() {
        // 1) 모든 domain.User 객체 가져옴
        List<User> users = userMapper.findAll();    // 서비스 계층 -> 매퍼 계층

        // 2) 새로운 DTO 객체 생성
//        List<UserDTO> userDTOs = new ArrayList<>();

        // 3) 반복문을 이용해 각 User 객체를 UserDTO로 변환하고 리스트에 추가
//        for (User user : users) {
//            UserDTO userDTO = convertToDto(user);
//            userDTOs.add(userDTO);
//        }

        return users.stream().map(this::convertToDto).toList();

        // 4) UserDTO 리스트 반환
//        return userDTOs;
    }

    // 특정 ID의 사용자 정보를 UserDTO로 반환
    public UserDTO getUserById(Long id) {
        User user = userMapper.findById(id);
        return convertToDto(user);
    }


    // domain to dto
    private UserDTO convertToDto(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());
        dto.setNo((int) (user.getId() + 100));

        return dto;
    }

    // 사용자 정보 업데이트
    public void updateUser(UserDTO userDTO) {
        User user = convertToEntity(userDTO);
        userMapper.update(user);
    }

    // 특정 ID의 사용자 삭제
    public void deleteUser(Long id) {
        userMapper.delete(id);
    }

    // dto to domain
    private User convertToEntity(UserDTO dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());

        return user;
    }

    // 참고. domain.User와 dto.UserDTO를 서로 변환하는 이유
    // - domain.User : 데이터베이스 엔티티를 표현
    // - dto.UserDTO : 클라이언트와 데이터 전송에 사용
    // DTO를 사용하게 되면 클라이언트의 요구사항에 맞춰서 데이터 구조를 쉽게 변경
    // -> 필요한 데이터만 클라이언트에 전송해서 네트워크 부하도 줄일 수 있음
    // -> API 버전 관리 용이 (엔티티(도메인) 변경 시 DTO 를 통해 이전 버전과의 호환성 유지 가능)

}
