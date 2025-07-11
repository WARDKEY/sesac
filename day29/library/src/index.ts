// 사용자 인터페이스 (User Interface) 정의
// 사용자는 id 예 : "admin-001", "user-001"
// 이름
// 역할

enum Role {
  ADMIN = "admin",
  REGULAR = "regular",
}

interface User {
  id: string;
  name: string;
  role: Role;
}

// Book interface
// isbn string  // 책 고유 번호
// title  // 제목
// author // 저자
// publishedYear  // 출판연도
// isAvailable  // 대출 가능 여부

interface Book {
  isbn: string;
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

// LoanRecord
// loanId:  number
// bookIsbn: string
// userId: string
// loanDate: Date
// dueDate: Date
// returnDate: ?Date

interface LoanRecord {
  loanId: number;
  bookIsbn: string;
  userId: string;
  loanDate: Date;
  dueDate: Date;
  returnDate?: Date;
}

// 데이터 정의
// 도서 목록을 저장
let libraryBooks: Book[] = [];
// 회원 목록을 저장
let libraryUsers: User[] = [];
// 대출 기록을 저장
let loanRecords: LoanRecord[] = [];

// isAdmin 함수
// 입력으로 유저 정보 받고
// 반환 값으로 user role 값이 admin이면 true를
// user의 role 값이 admin이 아니면 false
function isAdmin(user: User): boolean {
  return user.role === Role.ADMIN;
}

// isRegularUser
function isRegularUser(user: User): boolean {
  return user.role === Role.REGULAR;
}

// **도서 등록 기능** 관리자만 등록이 가능
// 도서 등록 함수가 호출되면,
// user가 권한이 있는지 확인하고
// book 정보가 이미 등록되어 있는지 확인하고
// 없는 경우에만 추가

function addBook(user: User, book: Book): void {
  // 권한 확인
  if (!isAdmin(user)) {
    console.log("권한 없음");
    return;
  }

  // isbn 배열로 변경
  // let bookIsbn = libraryBooks.map((b) => b.isbn);

  // book 정보가 없거나, isbn이 없으면 추가
  // if (libraryBooks.length === 0 || !bookIsbn.includes(book.isbn)) {
  //   libraryBooks.push(book);
  // }

  if (libraryBooks.some((b) => b.isbn === book.isbn)) {
    console.log("이미 있음");
    return;
  }

  libraryBooks.push(book);
}

// **도서 삭제 기능**
// 1) 관리자인지 확인
// 2) 도서 목록에 있는지
// 3) 대출 진행 중이면 삭제 불가
// 4) 삭제
function removeBook(user: User, isbn: Pick<Book, "isbn">): void {
  // 1) 관리자인지 확인
  if (!isAdmin(user)) {
    console.log("권한 없음");
    return;
  }

  // 2) 도서 목록에 있는지 확인
  const index = libraryBooks.findIndex((book) => book.isbn === isbn.isbn);
  if (index === -1) {
    console.log(`ISBN ${isbn}인 도서를 찾을 수 없습니다.`);
    return;
  }

  // 3) 대출 진행 중이면 삭제 불가
  if (!libraryBooks[index].isAvailable) {
    console.log(`해당 도서가 대출 중 입니다.`);
    return;
  }

  // 3) 삭제
  // 제거한 요소를 담은 배열. 하나의 요소만 제거한 경우 길이가 1인 배열을 반환합니다.
  // 아무 값도 제거하지 않았으면 빈 배열을 반환합니다.
  const removeBook = libraryBooks.splice(index, 1)[0];
  console.log(`도서 ${removeBook.title} (ISBN: ${isbn}이(가) 삭제되었습니다.)`);
}

// **도서 대출 기능**
// Regular 유저인지 체크
// 없으면 -1 리턴
// 해당 도서가 대출 중이면 -1 리턴
// 해당 도서가 대출이 가능하면 해당 index값 리턴
function borrowBook(user: User, isbn: string): number {
  // 1. Regular 유저인지 확인
  if (!isRegularUser(user)) {
    console.log("권한 없음");
    return -1;
  }

  // 2. ISBN에 해당하는 도서 찾기
  const index = libraryBooks.findIndex((book) => book.isbn === isbn);
  // 도서를 못 찾는 경우
  if (index === -1) {
    console.log(`ISBN ${isbn}인 도서를 찾을 수 없습니다.`);
    return -1;
  }

  // 대출 중인지 확인
  if (!libraryBooks[index].isAvailable) {
    console.log(`해당 도서가 대출 중 입니다.`);
    return -1;
  }

  return index;
}

// 사용자 추가
function registerUser(user: User, { id, name, role }: User): void {
  // 관리자만 추가 가능
  if (!isAdmin(user)) {
    console.log("권한 없음");
    return;
  }

  // 유저 입력 정보 확인
  if (
    id === null ||
    id.trim() === "" ||
    name === null ||
    name.trim() === "" ||
    role === null
  ) {
    console.log("정보를 입력해주세요.");
  }

  // 중복 확인
  if (libraryUsers.some((u) => u.id === id)) {
    console.log("이미 가입된 유저입니다.");
    return;
  }

  // 새로운 유저 생성
  const newUser: User = {
    id: id,
    name: name,
    role: role,
  };

  libraryUsers.push(newUser);
}
