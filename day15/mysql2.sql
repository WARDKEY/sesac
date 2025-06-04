USE test_shop;

-- 외래키 실습

-- 실습 1
CREATE TABLE Departments (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(255) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES Departments (department_id)
);

SHOW TABLES;

DESC Students;

DESC Departments;

-- 실습 2
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE
);

-- 외래 키에 UNIQUE 넣으면 1대1
CREATE TABLE UserProfiles (
    profile_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT UNIQUE,
    bio VARCHAR(255),
    website VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users (user_id) ON UPDATE CASCADE ON DELETE CASCADE
);

DROP TABLE UserProfiles;

DESC UserProfiles;

-- 실습 3
CREATE TABLE Hashtags (
    hashtag_id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE UserHashtagFollows (
    follow_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    hashtag_id INT NOT NULL,
    followed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users (user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (hashtag_id) REFERENCES Hashtags (hashtag_id) ON UPDATE CASCADE ON DELETE CASCADE
);

DESC UserHashtagFollows;

-- JOIN 실습

-- 실습 1
-- Customers 테이블 생성
CREATE TABLE Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

-- Orders 테이블 생성
CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customers (customer_id)
);

-- Customers 데이터 삽입
INSERT INTO
    Customers (customer_name, email)
VALUES ('김철수', 'kim@example.com'),
    ('이영희', 'lee@example.com'),
    ('박지민', 'park@example.com'),
    ('최수정', 'choi@example.com');

-- Orders 데이터 삽입
INSERT INTO
    Orders (
        customer_id,
        order_date,
        amount
    )
VALUES (1, '2023-01-15', 120.50),
    (2, '2023-01-16', 75.00),
    (1, '2023-02-01', 200.00),
    (3, '2023-02-10', 50.25),
    (2, '2023-03-05', 150.00);

-- 각 주문의 order_id, order_date, amount와 함께 해당 주문을 한 고객의 customer_name을 조회하세요.
SELECT o.order_id, o.order_date, o.amount, c.customer_name
FROM Orders o
    INNER JOIN Customers c ON o.customer_id = c.customer_id;

-- 고객 '김철수'가 주문한 모든 주문의 order_id, order_date, amount를 조회하세요.
SELECT o.order_id, o.order_date, o.amount
FROM Orders o
    INNER JOIN Customers c ON o.customer_id = c.customer_id
WHERE
    c.customer_name = '김철수';

-- 총 주문 금액이 100 이상인 주문의 order_id, amount, 그리고 해당 주문을 한 고객의 customer_name을 조회하세요.
SELECT o.order_id, o.amount, c.customer_name
FROM Orders o
    INNER JOIN Customers c ON o.customer_id = c.customer_id
WHERE
    o.amount >= 100;

-- 각 고객별로 총 주문 횟수를 조회하세요. 고객 이름과 주문 횟수를 함께 보여주세요.
SELECT c.customer_name AS '고객 이름', COUNT(o.order_id) AS '총 주문 횟수'
FROM Customers c
    INNER JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY
    c.customer_name;

select * from Orders;

-- 실습 2

-- Departments 테이블 생성
CREATE TABLE Departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL UNIQUE
);

-- Employees 테이블 생성
CREATE TABLE Employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    dept_id INT,
    hire_date DATE NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES Departments (dept_id)
);

-- Departments 데이터 삽입
INSERT INTO
    Departments (dept_name)
VALUES ('영업부'),
    ('개발부'),
    ('마케팅부');

-- Employees 데이터 삽입
INSERT INTO
    Employees (emp_name, dept_id, hire_date)
VALUES ('홍길동', 1, '2022-03-01'),
    ('김하나', 2, '2022-04-10'),
    ('이두나', 1, '2023-01-05'),
    ('박서준', NULL, '2023-02-15'), -- 부서가 없는 직원
    ('정우성', 3, '2022-11-20');

-- 모든 직원의 emp_name과 hire_date를 조회하고, 만약 부서에 소속되어 있다면 해당 부서의 dept_name도 함께 조회하세요.
-- 부서가 없는 직원도 결과에 포함되어야 합니다.
SELECT e.emp_name, e.hire_date, d.dept_name
FROM Employees e
    LEFT JOIN Departments d on e.dept_id = d.dept_id;

-- 아직 어떤 직원도 소속되지 않은 부서의 이름을 조회하세요.
SELECT d.dept_name
FROM Departments d
    LEFT JOIN Employees e ON d.dept_id = e.dept_id
WHERE
    e.dept_id IS NULL;

-- 각 부서별로 소속된 직원의 수를 조회하세요. 부서 이름과 직원 수를 함께 보여주세요.
-- 부서에 소속된 직원이 없는 경우에도 부서 이름은 표시되어야 하며, 직원 수는 0으로 표시하세요.
SELECT d.dept_name AS '부서 이름', COUNT(e.emp_id) AS '직원 수'
FROM Departments d
    LEFT JOIN Employees e on d.dept_id = e.dept_id
GROUP BY
    d.dept_name;

-- 2023년 이후에 입사한 직원들의 이름과 소속 부서 이름을 조회하세요. 부서가 없는 직원은 제외합니다.
SELECT e.emp_name, d.dept_name
FROM Employees e
    INNER JOIN Departments d on d.dept_id = e.dept_id
WHERE
    e.hire_date >= '2023-01-01';

-- 서브쿼리 실습

-- Departments2 테이블 생성
CREATE TABLE Departments2 (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL UNIQUE
);

-- Employees3 테이블 생성
CREATE TABLE Employees3 (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    dept_id INT,
    salary DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES Departments2 (dept_id)
);

-- Departments2 데이터 삽입
INSERT INTO
    Departments2 (dept_name)
VALUES ('인사부'),
    ('재무부'),
    ('기획부');

-- Employees3 데이터 삽입
INSERT INTO
    Employees3 (emp_name, dept_id, salary)
VALUES ('김인사', 1, 50000.00),
    ('이재무', 2, 60000.00),
    ('박기획', 3, 70000.00),
    ('최인사', 1, 55000.00),
    ('정재무', 2, 62000.00),
    ('강기획', 3, 68000.00),
    ('윤인사', 1, 48000.00),
    ('신재무', 2, 58000.00);

-- '재무부'에 소속된 직원들 중에서, '재무부'의 평균 급여보다 많이 받는 직원의 emp_name과 salary, 그리고 소속 dept_name을 조회하세요.
SELECT e.emp_name, e.salary, d.dept_name
FROM
    Employees3 AS e
    INNER JOIN Departments2 AS d ON e.dept_id = d.dept_id
WHERE
    d.dept_name = '재무부'
    AND e.salary > (
        SELECT AVG(salary)
        FROM Employees3
        WHERE
            dept_id = (
                SELECT dept_id
                FROM Departments2
                WHERE
                    dept_name = '재무부'
            )
    );

-- 각 부서별로 가장 높은 급여를 받는 직원의 emp_name, salary, dept_name을 조회하세요. (동일한 최고 급여자가 여러 명일 수 있습니다.)

-- 전체 직원들의 평균 급여보다 많이 받는 모든 직원의 emp_name, salary, dept_name을 조회하세요.

-- 급여가 가장 낮은 직원 3명의 emp_name, salary, dept_name을 조회하세요. (동일 급여자가 여러 명일 수 있습니다.)