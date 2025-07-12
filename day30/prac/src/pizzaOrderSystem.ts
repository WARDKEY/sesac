// enum Size {
//   LARGE = "L",
//   MEDIUM = "M",
//   SMALL = "S",
// }

class Pizza {
  constructor(private name: string, private size: "S" | "M" | "L") {
    this.name = name;
    this.size = size;
  }

  public getName(): string {
    return this.name;
  }

  public getSize(): string {
    return this.size;
  }
}

class Customer {
  constructor(private name: string) {
    this.name = name;
  }

  orderPizza(pizza: Pizza): void {
    console.log(
      `[${
        this.name
      }]님이 [${pizza.getName()}] (${pizza.getSize()}) 피자를 주문했습니다. `
    );
  }

  public getName(): string {
    return this.name;
  }
}

class Cashier {
  constructor(private name: string) {
    this.name = name;
  }

  makePizza(pizza: Pizza): void {
    console.log(
      `[${
        this.name
      }] 점원이 [${pizza.getName()}] (${pizza.getSize()}) 피자를 만들고 있습니다.`
    );
  }
}

const customer = new Customer("김철수");
const cashier = new Cashier("최은지");

const pizza = new Pizza("페퍼로니", "L");

customer.orderPizza(pizza);
cashier.makePizza(pizza);
