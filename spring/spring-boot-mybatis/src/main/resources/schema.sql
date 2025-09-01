-- 데이터베이스 생성
create database codingon default character set utf8 default collate utf9_general_ci;
use codingon;
drop table if exists codingon;

-- users 테이블 생성
drop table if exists users;

create table users
(
    id         bigint auto_increment primary key,
    username   varchar(50)  not null,
    email      varchar(100) not null,
    created_at timestamp default current_timestamp
);

create table boards
(
    id         bigint auto_increment primary key,
    title      varchar(20)  not null,
    content    varchar(100) not null,
    writer     varchar(10)  not null,
    registered timestamp default current_timestamp
);


-- users 테이블에 더미 데이터 삽입
insert into users (username, email)
values ('jone_doe', 'jon.doe@example.com'),
       ('jane_smith', 'jane.smith@example.com'),
       ('johnson', 'bob.jonhson@example.com');

select *
from users;