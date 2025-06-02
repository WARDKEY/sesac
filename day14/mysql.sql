show databases;

create database test_shop;

use test_shop;

-- DDL 정의어

-- 상품 테이블
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10 , 2 ) NOT NULL,
    category VARCHAR(100)
);


drop table products;

drop database test_shop;

show tables;

alter table products add description varchar(500);

SELECT 
    *
FROM
    products;

alter table products drop column category;

-- DML 조작어

insert into products (name, price, category) values ('스마트워치', 350000, '웨어러블');

insert into products (name, price, category) values 
('무선 키보드', 80000, '컴퓨터 주변기기'), 
('게이밍 마우스',50000, '컴퓨터 주변기기');

DELETE FROM products 
WHERE
    id = 1;

SELECT 
    p.name, p.price
FROM
    products p;

SELECT 
    *
FROM
    products;

SELECT 
    *
FROM
    products
WHERE
    price > 50000;

SELECT 
    *
FROM
    products
ORDER BY price;

SELECT 
    *
FROM
    products
LIMIT 2;

UPDATE products 
SET 
    price = 75000
WHERE
    id = 2;

CREATE TABLE member (
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2)
);

desc member;

alter table member modify column id varchar(10);

alter table member drop age;

alter table member add interest varchar(100);

CREATE TABLE user (
    id VARCHAR(10) PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);

drop table user;

insert into user (id, pw, name, gender, birthday, age) values 
	('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33),
    ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
    ('power79', 'qxur8sda', '변사또', 'M', '1970-05-02', 53),
    ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39),
    ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
    ('dvadva', 'k3f3ah', '송하나', 'F', '2002-06-03', 22),
    ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

SELECT 
    *
FROM
    user;

-- 모든 회원 목록을 가져오는데 이때 birthday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오시오.
SELECT 
    *
FROM
    user
ORDER BY birthday;

-- 회원 목록 중 gender 컬럼의 값이 'M'인 회원목록을 가져오는데, 이 때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오시오.
SELECT 
    *
FROM
    user
WHERE
    gender = 'M'
ORDER BY name DESC;

-- 1990년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주시오.
SELECT 
    id, name
FROM
    user
WHERE
     DATE_FORMAT(birthday, '%Y-%m') BETWEEN '1990-01' AND '1999-12';
    -- birthday between '1990-01-01' and '1999-12-31'; -- 위랑 같음

-- 6월생 회원의 목록을 birthday 기준으로 오름차순으로 정렬하여 가져오시오.
SELECT 
    *
FROM
    user
WHERE
    DATE_FORMAT(birthday, '%m-%d') BETWEEN '06-01' AND '06-30'
ORDER BY birthday;

-- gender 컬럼의 값이 'M'이고, 1970년대에 태어난 회원의 목록을 가져오시오.
SELECT 
    *
FROM
    user
WHERE
    gender = 'M'
        AND birthday BETWEEN '1970-01-01' AND '1979-12-31';

-- 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그때 처음 3개의 레코드만 가져오시오.
SELECT 
    *
FROM
    user
ORDER BY age DESC
LIMIT 3;

-- 모든 회원 목록 중 나이가 25 이상 50 이하인 회원의 목록을 출력하시오.
SELECT 
    *
FROM
    user
WHERE
    age >= 25 AND age <= 50;

-- id 컬럼의 값이 hong1234인 레코드의 pw 컬럼의 값을 12345678로 변경하시오.
UPDATE user 
SET 
    pw = '12345678'
WHERE
    id = 'hong1234'; 

-- id 컬럼의 값이 junkrat인 레코드를 삭제하시오.
DELETE FROM user 
WHERE
    id = 'jungkrat';


-- GROUP BY
INSERT INTO products (name, price, category) VALUES ('노트북1', '10000', 'A'),
('노트북2', '12000', 'B'),
('노트북3', '13000', 'A'),
('노트북4', '14000', 'B'),
('노트북5', '15000', 'C');

-- 카테고리가 기준이므로 카테고리가 필수로 들어가야 됨, as 뒤에 별칭(alias) 지정
SELECT 
    category,
    SUM(price) AS 'sum_price',
    MAX(price) AS 'max_price',
    AVG(price) AS 'avg_price',
    COUNT(*) AS 'total'
FROM
    products
GROUP BY category
HAVING avg_price > 12000;

SELECT 
    *
FROM
    products;


-- 사용자 테이블
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    membership_level VARCHAR(20)
);

-- 주문 테이블 user_id를 외래키로 지정
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT,
    order_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);



