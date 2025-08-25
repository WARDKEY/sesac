package codingon.spring_boot_default.controller._01_thymeleaf;

import codingon.spring_boot_default.dto_vo.AddressVO;

public class AdressMain {
    public static void main(String[] args) {
        AddressVO address1 = new AddressVO("Seoul", "Gangnam-daero", "06236");
        AddressVO address2 = new AddressVO("Seoul", "Gangnam-daero", "06236");
        AddressVO address3 = new AddressVO("Seoul", "Mapo-daero", "06452");

        address1.compareAddress(address2);
        address1.compareAddress(address3);

    }
}
