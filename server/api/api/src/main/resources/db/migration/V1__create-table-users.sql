CREATE TABLE users (
    user_id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    user_email varchar(100) NOT NULL,
    user_password varchar(255) NOT NULL,
    primary key (user_id),
    UNIQUE (user_email)
) DEFAULT CHARSET = utf8;