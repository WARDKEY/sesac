package codingon.spring_boot_jpa.service;

import codingon.spring_boot_jpa.dto.UserDTO;
import codingon.spring_boot_jpa.entity.User;
import codingon.spring_boot_jpa.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    // 모든 사용자의 정보를 UserDTO 리스트로 반환
    public List<UserDTO> getAllUsers() {
        // 1. Repository 계층에서 모든 User 리스트 가져옴
        List<User> users = userRepository.findAll();

        // 2. 새로운 DTO 객체 리스트 생성
        List<UserDTO> userDTOs = new ArrayList<>();

        // 3. 반복문을 이용해 User 객체를 UserDTO 객체로 변환하고 리스트에 추가
        for (User user : users) {
            UserDTO userDTO = convertToDTO(user);
            userDTOs.add(userDTO);
        }

        return userDTOs;

//        return userRepository.findAll().stream().map(u -> UserDTO.builder()
//                .no((int) (u.getId() + 100))
//                .id(u.getId())
//                .email(u.getEmail())
//                .username(u.getUsername())
//                .build()).toList();
    }

    // 특정 ID 의 사용자 조회
    public UserDTO getUserById(Long id) {
        // JPA 가 기본 제공하는 findById 메서드로 특정 유저를 찾을텐데
        // 있다면 User 객체 반환, 찾지 못하면 null 반환
        User user = userRepository.findById(id).orElse(null);

        if (user == null) {
            throw new RuntimeException("User not found");
        }

        return convertToDTO(user);
    }

    public void createUser(UserDTO userDTO) {
        // 1. 클라이언트한테 추가해야할 정보를 받음
        User user = convertToEntity(userDTO);

        // 2. repository 에게 추가 요청
        userRepository.save(user);
    }

    // 사용자 정보 업데이트
    public void updateUser(Long id, UserDTO userDTO) {
        userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not Found"));
        User user = convertToEntityWithId(id, userDTO);
        userRepository.save(user);
    }


    // 특정 ID 의 사용자 삭제
    public void deleteUser(Long id) {
        userRepository.findById(id).orElseThrow(()
                -> new RuntimeException("User not found"));

        userRepository.deleteById(id);
    }

    // entity(domain) to dto
    private UserDTO convertToDTO(User user) {
        // builder() 패턴을 이용해 DTO 객체 생성
        return UserDTO.builder()
                .no((int) (user.getId() + 100))
                .id(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .build();
    }

    // dto to entity
    private User convertToEntity(UserDTO dto) {
        // builder 패턴을 이용해 User 객체 변환
        return User.builder()
                .id(dto.getId())
                .email(dto.getEmail())
                .username(dto.getUsername())
                .build();
    }

    // dto to entity with id
    private User convertToEntityWithId(Long id, UserDTO dto) {
        return User.builder()
                .id(id)
                .email(dto.getEmail())
                .username(dto.getUsername())
                .build();
    }

    public List<UserDTO> getUserByUsername(String username) {
        return userRepository.findByUsername(username).stream().map(this::convertToDTO).toList();
    }

    public List<UserDTO> searchUsers(String keyword) {
        // - 첫 번째 인자: username을 검색하기 위한 keyword 매개값
        // - 두 번째 인자: email을 검색하기 위한 keyword 매개값
        return userRepository.findByUsernameContainingOrEmailContaining(keyword).stream()
                .map(this::convertToDTO).toList();
//        return userRepository.findByUsernameContainingOrEmailContaining(keyword, keyword).stream()
//                .map(this::convertToDTO).toList();
    }

    public boolean isUsernameExists(String username) {
        return userRepository.existsByUsername(username);
    }
}
