import { UUID } from "crypto";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from "typeorm";
  

@Entity()
export class User {
@PrimaryGeneratedColumn("uuid")
id: string;

@Column({ type: "text", unique: true })
email: string;

@Column({ type: "text" })
password: string;
}