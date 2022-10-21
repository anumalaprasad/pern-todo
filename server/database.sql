CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);

CREATE DATABASE prm_airdrop;

CREATE TABLE airdrop(
  id SERIAL PRIMARY KEY,
  userAddress VARCHAR(255),
  referralAddress VARCHAR(255) 
);