// 배송 상태 (pending, in-transit, delivered 상태 관리)
enum DeliveryStatus {
  PENDING = "pending",
  IN_TRANSIT = "in-transit",
  DELIVERED = "delivered",
}

// 배송 수단 (배송 처리 방식 정의)
interface DeliveryAgent {
  getName(): string;
  deliver(delivery: Delivery): void;
}

// 배송 기사
class DeliveryMan implements DeliveryAgent {
  constructor(private name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  deliver(delivery: Delivery): void {
    console.log(
      `[${this.name}] 배송기사가 [${delivery
        .getProduct()
        .getName()}] 배송을 시작했습니다.`
    );

    delivery.updateStatus(DeliveryStatus.IN_TRANSIT);

    console.log(
      `[${this.name}] 배송기사가 [${delivery
        .getProduct()
        .getName()}] 배송을 완료했습니다.`
    );

    delivery.updateStatus(DeliveryStatus.DELIVERED);
  }
}

// 드론
class DroneDelivery implements DeliveryAgent {
  constructor(private name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  deliver(delivery: Delivery): void {
    console.log(
      `[${this.name}] 드론이 [${delivery
        .getProduct()
        .getName()}] 배송을 시작했습니다.`
    );

    delivery.updateStatus(DeliveryStatus.IN_TRANSIT);

    console.log(
      `[${this.name}] 드론이 [${delivery
        .getProduct()
        .getName()}] 배송을 완료했습니다.`
    );

    delivery.updateStatus(DeliveryStatus.DELIVERED);
  }
}

// 고객 (상품 주문 및 요청 전달)
class Customer2 {
  constructor(private name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  // 상품 주문 및 요청 전달 메서드
  public placeOrder(product: Product, center: LogisticsCenter): Delivery {
    console.log(
      `[${this.name}]님이 [${product.getName()}] 주문 요청을 보냈습니다.`
    );

    let delivery = new Delivery(this, product);
    center.saveDelivery(delivery);
    return delivery;
  }
}

// 상품 (이름, 무게 정보 보유)
class Product {
  constructor(private name: string, private weight: number) {
    this.name = name;
    this.weight = weight;
  }

  public getName(): string {
    return this.name;
  }

  public getWeight(): number {
    return this.weight;
  }
}

// 배송 요청 (고객, 상품, 상태 보유 및 상태 변경)
class Delivery {
  private status: DeliveryStatus = DeliveryStatus.PENDING;

  constructor(private customer: Customer2, private product: Product) {
    this.customer = customer;
    this.product = product;
  }

  public getCustomer(): Customer2 {
    return this.customer;
  }

  public getProduct(): Product {
    return this.product;
  }

  public getStatus(): DeliveryStatus {
    return this.status;
  }

  updateStatus(status: DeliveryStatus): void {
    this.status = status;
  }
}

// 물류센터 (배송 요청 저장 및 배송 수단에 위임)
class LogisticsCenter {
  private deliveries: Delivery[] = [];

  public getDeliveries(): Delivery[] {
    return this.deliveries;
  }

  saveDelivery(delivery: Delivery): void {
    this.deliveries.push(delivery);
  }

  dispatch(delivery: Delivery, deliveryAgent: DeliveryAgent): void {
    deliveryAgent.deliver(delivery);
  }
  printAllDeliveries(): void {
    console.log("📦 현재 물류 배송 현황:");
    this.deliveries.forEach((d) => {
      console.log(
        `- [${d.getProduct().getName()}] / 고객: ${d
          .getCustomer()
          .getName()} / 상태: ${d.getStatus()}`
      );
    });
  }
}

// 테스트 코드
const customer2 = new Customer2("김철수");
const product = new Product("태블릿", 1.8);

const center = new LogisticsCenter();

const delivery = customer2.placeOrder(product, center);

const drone = new DroneDelivery("DR-300");

center.dispatch(delivery, drone);

center.printAllDeliveries();
