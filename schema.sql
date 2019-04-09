CREATE DATABASE mishmash;

USE mishmash;
CREATE TABLE users (
	id			INT NOT NULL AUTO_INCREMENT,
    name		VARCHAR(30) NOT NULL,
    password	VARCHAR(200) NULL,
	PRIMARY KEY(id)
);

USE mishmash;
CREATE TABLE ingredients (
	id			INT NOT NULL AUTO_INCREMENT,
    name		VARCHAR(50) NULL,
    user				INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_user (user)
    REFERENCES users (id)
);

USE mishmash;
CREATE TABLE recipes (
	id				INT NOT NULL AUTO_INCREMENT,
    spoonacular_id	INT NOT NULL,
    user			INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY fk_user (user)
    REFERENCES users (id)
);