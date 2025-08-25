package codingon.spring_boot_default.dto_vo;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
public final class AddressVO {
    private final String city;
    private final String street;
    private final String zipcode;

    public void compareAddress(AddressVO addressVO2) {
        System.out.println(this);
        System.out.println(addressVO2);
        if (this.equals(addressVO2)) {
            System.out.println("두 주소는 같습니다.");
            return;
        }
        System.out.println("두 주소는 다릅니다.");

    }

    @Override
    public String toString() {
        return
                city + ", " + '\'' +
                        street + '\'' +
                        " (" + zipcode + ") "
                ;
    }
}
