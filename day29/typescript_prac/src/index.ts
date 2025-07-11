/** 생성자
import { add } from '../../../day27/2/src/test';
 * 생성자는 클래스의 인스턴스를 생성하고 초기화하는데 사용되는 특별한 메서드
 * 생성자는 클래스 내에서 constructor라는 이름으로 정의
 * 생성자는 인스턴스를 생성할 때 자동으로 호출
 * 생성자는 클래스 내에 오직 하나만 존재할 수 있음
 * 보통, 생성자로 객체 속성을 초기화 하는 것뿐 아니라 객체가 생성이 될 때 꼭 되어야 하는 초기화 로직을 집어넣기도 함
 *
 */

class Coffee {
  // 속성
  coffeeType: string;
  shot: number;

  // 생성자
  // 매개변수 앞에 접근제한자 붙이면 자동으로 속성 생성
  constructor(public type: string, public shots: number) {
    this.coffeeType = type;
    this.shot = shots;
  }

  // 메서드
  describe() {
    console.log(`${this.shot}샷이 들어간 ${this.coffeeType} 커피입니다.`);
  }
}

const temp = new Coffee("에스프레소", 10);

const temp2 = new Coffee("아메리카노", 1);

/** 접근 제한자
 * 클래스에서는 속성과 메서드의 접근 제한자를 사용해 접근을 제한할 수 있다.
 *
 * 1) public
 *    클래스 외부에서도 접근이 가능한 접근 제한자
 *    접근 제한자가 선언이 안 되어 있으면 기본적으로 접근 제한자는 public
 *    클래스의 함수 중 민감하지 않은 객체 정보를 열람할 때나 누구나 해당 클래스의 특정 기능을 사용해야 할 때 많이 사용
 *
 * 2) private
 *    클래스 내부에서만 접근이 가능한 접근 제한자
 *    보통은 클래스의 속성은 대부분 private으로 접근 제한자를 설정
 *      - 외부에서 직접적으로 객체의 속성을 변경할 수 없게 제한
 *    클래스의 속성을 보거나 편집하고 싶다면 별도의 getter/setter 메서드를 준비해놓는 것이 관례
 *
 * 3) protected
 *    클래스 내부의 해당 클래스를 상속받은 자식 클래스에서만 접근이 가능한 접근 제한자
 *
 */

class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  // getter
  public getBalance(): number {
    return this.balance;
  }

  // like setter
  public deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    }
  }
}

const test = new BankAccount(10000);
test.getBalance();
test.deposit(10000);

/** 상속(Inheritance)
 * 코드 재사용을 위한 핵심 기능
 * 상속은 객체 지향 프로그래밍에서 클래스 간의 관계를 정의하는 중요한 개념
 * 상속을 통해 기존 클래스의 속성과 메서드를 물려받아 새로운 클래스를 정의
 * 상속이 있어서 똑같은 코드를 계속 반복적으로 작성할 필요 없음
 * 아래의 예제를 보면 Vehicle이라는 클래스를 생성했으면 ElectricCar에서 클래스를 상속받고 자체적으로 필요한 속성 및 메서들를 추가하면 끝
 */

class Vehicle {
  move(): void {
    console.log("이동 중...");
  }
}

class ElectricCar extends Vehicle {}

class Car extends Vehicle {
  move(): void {
    console.log("시끄럽게 이동 중");
  }
}

const tesla = new ElectricCar();
tesla.move();

/** 슈퍼 타입 / 서브 타입
 * 1) 서브타입
 *    두 개의 타입 A와 B가 있고 B가 A의 서브타입이면 A가 필요한 곳에는 어디든 B를 안전하게 사용할 수 있다.
 * 2) 슈퍼타입
 *    두 개의 타입 A와 B가 있고 B가 A의 슈퍼타입이면 B가 필요한 곳에는 어디든 A를 안전하게 사용할 수 있다.
 *
 * 서브 타입 -> 슈퍼 타입으로 변환 : upcasting(implicit),
 * 슈퍼 타입 -> 서브 타입으로 변환 : downcast(explicit)
 *
 */

class Animal {
  eat() {
    console.log("먹는다.");
  }
}

class Dog extends Animal {
  constructor(private name: string) {
    super(); // 부모 클래스의 생성자를 먼저 호출해야됨
    this.name = name;
  }
}

// upcasting
let dog: Dog = new Dog("또순이");
let animal: Animal = dog; // 업캐스팅
animal.eat();

// downcast
let animal2: Animal = new Dog("또순이");
// let realDog: Dog = ani;  // 에러 발생
let realDog: Dog = animal2 as Dog; // 다운 캐스팅
animal2.eat();

/** 추상 클래스
 * 추상 클래스는 클래스와는 다르게 인스턴스화를 할 수 없는 클래스
 * 추상 클래스의 목적은 상속을 통해 자식 클래스에서 메서드를 제각각 구현하도록 강제를 하는 용도
 * 추상 클래스도 최소한의 기본 메서드는 정의를 할 수 있음
 * 핵심 기능의 구현은 전부 자식 클래스에게 위임
 * 단일 상속
 */

abstract class Media {
  constructor(public title: string) {}
  abstract play(): void;
}

class Song extends Media {
  play(): void {
    console.log(`${this.title} 재생 중...`);
  }
}

/** 인터페이스
 * 인터페이스는 객체가 가져야 하는 속성과 메서드를 정의
 * 인터페이스를 구현한 객체는 인터페이스를 반드시 준수해야됨, 규약과 같아서 어길 수 없음
 * 코드의 안정성을 높이고 유지 보수성을 향상시킬 수 있다.
 * 다중 상속 가능
 *
 * 구현부
 * 추상 클래스 : 클래스의 기본 구현을 제공
 * 인터페이스 : 객체의 구조만을 정의하고 기본 구현을 제공하지 않음
 *
 * 동작 방식
 * 추상 클래스 : 단일 상속만 지원
 * 인터페이스 : 다중 상속을 지원
 *
 * 구현 방식
 * 추상 클래스 : 추상 클래스를 상속받은 자식 클래스는 반드시 추상 함수를 구현
 * 인터페이스 : 인터페이스를 구현하는 클래스는 인터페이스에 정의된 모든 메서드를 구현
 *
 */

/** S.O.L.I.D 원칙
 * 1) 단일 책임 원칙 (SRP, Single Responsibility Principle) ******
 * 클래스는 하나의 책임만 가져야 한다는 매우 기본적인 원칙]
 * 5개의 설계 원칙 중 가장 기본적이고 중요한 원칙
 * 예를 들면, 유저 서비스라는 클래스가 있는 경우에 해당 클래스는 유저 관련된 액션만 해야되고 다른 액션을 해서는 안 된다.
 *
 * 2) 개방 폐쇄 원칙 (OCP, Open/Closed Principle)
 * 클래스는 확장에 대해서는 열려 있어야 하고 수정에 대해서는 닫혀 있어야 한다는 원칙
 * 클래스의 기존 코드를 변경하지 않고도 기능을 확장할 수 있어야 한다.
 * 즉, 인터페이스나 상속을 통해서 이를 해결할 수 있다.
 * 부모 클래스의 기존 코드 변경을 하지 않고 기능을 확장 가능함
 *
 * 3) 리스코프 교체 원칙 (LSP, Liskov Substitution Principle)
 * 서브타입은 기반이 되는 슈퍼타입을 대체할 수 있어야 한다는 원칙
 * 다시 말해, 자식 클래스는 부모 클래스의 기능을 수정하지 않고도 부모 클래스와 호환되어야 한다.
 * 논리적으로 엄격하게 관계가 정립되어야 한다.
 *
 * 4) 인터페이스 분리 원칙 (ISP, Interface Segregation Principle)
 * 클래스는 자신이 사용하지 않는 인터페이스의 영향을 받지 않아야 하낟.
 * 즉, 해당 클래스에게 무의미한 메서드의 구현을 막자는 의미
 * 인터페이스를 너무 크게 정의하기보단 필요한 만큼만 정의하고 클래스는 요구사항에 맞게 인터페이스를 구현 하도록 유도
 *
 * 5) 의존관계 역전 원칙 (DIP, Dependency Inversion Principle)
 * DIP는 Java의 Spring 프레임워크나 Node.js의 Nest.js 프레임워크와 같이 웹 서버 프레임워크 내에서 많이 나오는 원칙
 * 이 원칙은 하위 수준 모듈(구현 클래스)보다 상위 수준 모듈(인터페이스)에 의존을 해야된다는 의미
 *
 */

// SRP 예시
class UserService {
  constructor(private db: Database) {}

  getUser(id: number): User {
    // 사용자 조회 로직
    return this.db.findUser(id);
  }

  saveUser(user: string): void {
    // 사용자 저장 로직
    this.db.saveUser(user);
  }
}

class EmailService {
  sendWelcomeEmail(user: User): void {
    // 이메일 전송 로직
    console.log(`Sending welcome email to ${user.email}`);
  }
}

// OCP 예시
interface Notification {
  send(message: string): void;
}

class EmailNotifier implements Notification {
  send(message: string): void {
    console.log(`이메일 발송 ${message}`);
  }
}

class SNSNotifier implements Notification {
  send(message: string): void {
    console.log(`SNS 발송: ${message}`);
  }
}

function notify(userMsg: string, service: Notification) {
  service.send(userMsg);
}

// LSP 예시
abstract class Bird {
  abstract move(): void;
}

class FlyingBird extends Bird {
  move() {
    console.log("펄럭펄럭");
  }
}

class NonFlyingBird extends Bird {
  move() {
    console.log("뚜벅뚜벅");
  }
}

// ISP 예시
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}
class SmartPrinter implements Printer, Scanner {
  scan(): void {}
  print(): void {}
}

// DIP 예시
interface MyStorage {
  save(data: string): void;
}

class MyLocalStorage implements MyStorage {
  save(data: string): void {
    console.log(`로컬에 저장 ${data}`);
  }
}

class MyCloudStorage implements MyStorage {
  save(data: string): void {
    console.log(`클라우드에 저장 ${data}`);
  }
}

class Database {
  // 구현된 하위 요소를 가져오는 것이 아닌 상위 요소의 인터페이스를 가져와서 써라
  constructor(private storage: MyStorage) {}
  saveData(data: string): void {
    this.storage.save(data);
  }
}

const myLocalStorage = new MyLocalStorage();
const myCloudStorage = new MyCloudStorage();
const myLocalDatabase = new Database(myLocalStorage);
const myCloudDatabase = new Database(myCloudStorage);
myLocalDatabase.saveData("로컬 데이터");
myCloudDatabase.saveData("클라우드 데이터");

/** Enum과 객체 리터럴
 * - 공통점
 *    enum과 객체 리터럴은 모두 상수를 정의하고 그룹화하는데 사용될 수 있다.
 *
 * - 차이점
 *  1) enum
 *  enum은 상수 값들의 집합을 정의하는데 사용되는 특별한 데이터 타입
 *  주로 관련된 상수들을 명확하게 그룹화하고 관리할 때 유용
 *  가독성 및 명확성 : 상수 값에 의미 있는 이름을 부여하여 코드의 가독성을 높인다.
 *  컴파일 시 자동 매핑 : 별도의 값 할당 없이 자동으로 숫자 값으로 매핑
 *  미리 정의된 상수 값만 사용할 수 있어서 타입 안정성이 높다.
 *  number와 string만 키값으로 가짐
 *
 *  2) 객체 리터럴
 *  객체 리터럴은 키-값 쌍으로 구성된 객체를 직접 생성하는 방식
 *  const 또는 let 키워드를 사용하여 정의하며, 다양한 데이터 타입을 값으로 가질 수 있음
 *  유연한 구조 : enum과 달리 키에 다양한 타입의 값을 할당할 수 있다.
 *  런타임 유연성 : 필요에 따라 객체의 속성을 추가, 수정, 삭제하는 등 런타임에 더 유연하게 다룰 수 있다.
 *  다목적 사용 : 상수 그룹화 외에도 데이터 구조, 설정 객체 등 다양한 용도로 활용
 *
 * - enum을 쓰면 좋은 경우
 *  - enum은 간단한 상수 값을 그룹화해서 관리를 할 때 적합
 *  - 또한, enum은 상수 값이기 때문에 **각 멤버의 값이 변하면 안 된다는 조건**이 있음
 *
 * - 객체 리터럴을 쓰면 좋은 경우
 *  - 객체 리터럴은 **멤버의 값이나 데이터 타입을 맘대로 변경**할 수 있을 때
 *  - 복잡한 구조와 다양한 데이터 타입을 사용해야 할 때는 객체 리터럴을 사용
 *
 */

// enum
enum userRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  VIEWER = "VIEWER",
}

enum OrderStatus {
  PENDING, // 0
  PROCESSING, // 1
  COMPLETED, // 2
  CANCELLED, // 3
}

function handleUserAction(role: userRole, order: OrderStatus) {
  if (role === userRole.ADMIN) {
    console.log("관리자 권한으로 작업을 수행합니다.");
  } else if (role === userRole.EDITOR) {
    console.log("편집자 권한으로 작업을 수행합니다.");
  } else {
    console.log("일반 사용자 권한으로 작업을 수행합니다.");
  }

  switch (order) {
    case OrderStatus.PENDING:
      console.log("주문이 대기 중입니다.");
      break;
    case OrderStatus.COMPLETED:
      console.log("주문이 완료되었습니다.");
      break;
    default:
      console.log("주문 상태를 확인해주세요.");
  }
}

const currentUserRole: userRole = userRole.EDITOR;
const currentOrderStatus: OrderStatus = OrderStatus.PENDING;
handleUserAction(currentUserRole, currentOrderStatus);

// 객체 리터럴
const appConfig = {
  appName: "My Awesome App",
  version: "1.0.0",
  apiEndPoints: {
    users: "/api/users",
    products: "/api/products",
  },
  isActive: true,
  maxUsers: 100,
};

const userProfile = {
  id: "user-123",
  username: "TypeScript_Master",
  email: "ts.master@example.com",
  roles: ["admin", "developer"],
  setting: {
    theme: "dark",
    notifications: true,
  },
  greet: function () {
    console.log(`안녕하세요, ${this.username}님!`);
  },
};
console.log(`앱 이름: ${appConfig.appName}, 버전: ${appConfig.version}`);
userProfile.greet();

/** 제네릭(Generic)
 * 프로그래밍을 하면서 다양한 데이터를 다루게 는는되느데, 이 데이터들을 안정적으로 처리하기 위해 나옴
 * 어떤 함수나 클래스가 여러 타입을 유연하게 받아들일 수 있어야 할 때 필요하다.
 *
 */

function print(value: any): any {
  console.log(value);
  return value;
}

// any를 사용하면 모든 타입을 받을 수 있지만, 타입스크립트의 가장 큰 장점인 정적 타입 검사가 없어진다.
// 아무 타입이나 들어오고 아무 타입으로 나가니 IDE나 컴파일러가 도와줄 수 없기 때문에 등장
// 제네릭은 타입을 매개변수처럼 사용하는 문법
// 마치 함수의 인자처럼, 나중에 넘길 수 있는 유연한 방식

// function identity<T>(value: T): T {
//   return value;
// }

// T는 타입 변수(Type Variable)
// identity<number>(123)이라고 호출면 T는 number가 되고,
// identity<string>("hello")라고 하면 T는 string이 됨
// 이처럼 제네릭은 유연성(재사용성)과 타입 안정성을 모두 챙길 수 있는 도구

function identity<T>(value: T): T {
  return value;
}

/**
 * 유틸리티 타입 (Utility Types)
 * TypeScript의 유틸리티 타입은 기존 타입을 기반으로 새로운 타입을 쉽게 생성하고 변환할 수 있도록 돕는 강력한 기능
 * 이를 통해 코드의 재사용성을 높이고 타입 추론을 더욱 효과적으로 활용할 수 있습니다.
 *
 * 1) Partial<T>
 * 2) Required<T>
 * 3) Readonly<T>
 * 4) Pick<T, K>
 * 5) Omit<T, K>
 *
 */

interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

// Partial<T> 일부 타입을 사용하기 위해 사용
// Partial<T>는 타입 T의 모든 속성을 선택적으로 만듭니다.
// 즉 해당 타입의 객체를 생성할 때 일부 또는 모든 속성을 생략할 수 있게 해줍니다.
// 보통은 객체의 일부 속성만 업데이트하거나, 특정 필드가 필수가 아닌 경우 사용합니다.
function updateProduct(
  product: Product,
  fieldsToUpdate: Partial<Product>
): Product {
  return {
    ...product,
    ...fieldsToUpdate,
  };
}

const originalProduct: Product = {
  id: "A101",
  name: "Laptop",
  price: 1200,
  description: "Powerful laptop for professionals",
};

const updatedProduct1 = updateProduct(originalProduct, {
  name: "Gaming Laptop",
});
console.log(updatedProduct1);

const updatedProduct2 = updateProduct(originalProduct, {
  price: 1300,
  description: "New Model with enhanced performance",
});

// Required<T>
// Required<T>는 Partial<T>와 반대로, 타입 T의 모든 속성을 필수적으로 만듦

interface UserProfile {
  username: string;
  email: string;
  phone?: string;
  address?: string;
}

// 타입지정, 선택적 속성(?)이 존재해도 필수로 지정
type CompleteUserProfile = Required<UserProfile>;

const newUser: CompleteUserProfile = {
  username: "john_doe",
  email: "john@example.com",
  phone: "010-1234-5678",
  address: "Seoul, South Korea",
};

// 필수 요소 제외돼서 에러
// const incompleteUser: CompleteUserProfile = {
//   username: "jane_doe",
//   email: "jane@example.com",
// };

/**
 * Readonly<T>는 타입 T의 모든 속성을 읽기 전용(readonly)으로 만듭니다.
 * 한 번 할당된 속성 값은 이후에 변경할 수 없습니다(재할당 불가).
 * 속성 값 직접 할당 못하게 하고 setter함수 등으로 변경 가능
 */

interface Point {
  x: number;
  y: number;
}

const mutablePoint: Point = { x: 10, y: 20 };
mutablePoint.x = 15;
console.log(mutablePoint);

type ImmutablePoint = Readonly<Point>;

const immutablePoint: ImmutablePoint = { x: 30, y: 40 };
// immutablePoint.x = 25;
console.log(immutablePoint);

/**
 * Pick<T, K>
 * Pick<T, K>는 타입 T에서 K에 해당하는 속성들만 선택하여 새로운 타입으로 만듦
 * 여기서 K는 T의 속성 이름들의 유니온 타입
 */

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

// 유니온 타입으로 집합 만들고
type name = "firstName" | "lastName";

// 키 값으로 넣음, 해당 속성값만 포함한 타입 생성
type CustomerName = Pick<Customer, name>;

const customerInfo: CustomerName = {
  firstName: "Alice",
  lastName: "Smith",
};

console.log(customerInfo); // {firstName : "Alice", lastName : "Smith"}

const invalidCustomerInfo: CustomerName = {
  firstName: "Alice",
  lastName: "Smith",
  // email: "bob@example.com",  // key값을 제외한 타입, 에러
};

/**
 * Omit<T, K>
 * Omit<T, K>는 Pick<T, K>와 반대로, 타입 T에서 K에 해당하는 속성들만 제외오하여 새로운 타입을 만듦
 * 기존 타입에서 불필요한 속성들을 제거하여 새로운 타입을 정의할 때 사용
 */

interface Employee {
  id: string;
  name: string;
  department: string;
  salary: number;
  hireDate: Date;
}

// 해당 속성 값을 제외한 타입 생성
type PublicEmployeeInfo = Omit<Employee, "salary" | "hireDate">;

const publicInfo: PublicEmployeeInfo = {
  id: "EMP001",
  name: "Charlie Brown",
  department: "Marketing",
};

console.log(publicInfo);

