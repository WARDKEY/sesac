package codingon.spring_boot_jpa.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String username;

    @Column(nullable = false, length = 100)
    private String email;

    @Column(name = "created_at", nullable = false, updatable = false,   // 수정 막음
            columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;

    // 영속성 컨텍스트 작업 전 초기화 작업
    @PrePersist // 엔티티가 데이터베이스에 저장되기 전에 필요한 초기화 작업 수행
    protected void onCreate() {
        // 엔티티가 처음 저장될 때 createAt 필드에 현재 시각 저장
        // 메서드 이름은 자유롭게 설정 가능 (단, 메서드 반환 타입은 void, 매개변수 x)
        createdAt = LocalDateTime.now();
    }
}
