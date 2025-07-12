// 배송 상태
enum DeliveryStatus {
  PENDING = "pending",
  IN_TRANSIT = "in-transit",
  DELIVERED = "delivered",
}

interface DeliveryAgent {
  printAllDeliveries: void;
}

// 고객
class Customer2 {
    // 고객 이름
  constructor(public name: string) {
    this.name = name;
  }

  // 상품 주문 및 요청 전달
  public placeOrder(product: Product, center: DeliveryAgent) {}
}

// 상품
class Product {
    // 이름, 무게 정보 보유
  constructor(public name: string, public weight: number) {
    this.name = name;
    this.weight = weight;
  }
}

// 배송 요청
class Delivery {
  public status: DeliveryStatus = DeliveryStatus.PENDING;

  constructor(public customer: Customer2, public product: Product) {
    this.customer = customer;
    this.product = product;
  }

  updateStatus(status: DeliveryStatus): void {
    this.status = status;
  }
}
