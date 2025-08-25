package codingon.spring_boot_default.dto_vo;

// 2D 좌표를 표현하는 vo 클래스

import java.util.Objects;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

// final class는 상속 불가 -> 불변성 보장
@Getter
@ToString
@AllArgsConstructor
//@EqualsAndHashCode
public final class Point {

    // final field: 한 번 초기화 되면 변경 불가능
    private final int x;
    private final int y;

    // 생성자, getter, vo 객체는 setter가 없기 때문에 불변성 보장

    // equals(): 객체의 동등성을 정의 (두 객체가 논리적으로 같은지)
    @Override
    public boolean equals(Object o) {
        // 현재 객체 (this) 와 비교대상 객체(매개변수 o) 와 같은 참조를 가르킨다면 (== 비교) true 반환
        if (this == o) {
            return true;
        }

        // 비교대상 객체 (매개변수 o) 가 null이거나
        // 현재 객체와 다른 클래스의 인스턴스라면 false 반환
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        // 비교대상 객체 (매개변수 o) 를 Point 타입으로 형변환
        Point point = (Point) o;

        // 두 Point 객체의 x, y 값이 모두 같은지 여부 반환
        return x == point.x && y == point.y;
    }

    // -> equals() 메서드로 같다고 판단된 두 객체는 "같은 hashCode"를 반환하도록 함
    @Override
    public int hashCode() {
        // Objects 클래스의 hash 메서드를 사용해서 x, y 값을 기반으로 해시코드 생성
        // -> 내부적으로 해시 알고리즘을 사용해 객체의 필드값을 결합한 해시코드 (즉, 같은 필드를 가지면 같은 해시코드를 리턴하도록 보장)
        return Objects.hash(x, y);
    }

    // 비즈니스 로직: 두 점 사이의 거리를 계산
    public double distanceTo(Point other) {
        int dx = this.x - other.x;
        int dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
