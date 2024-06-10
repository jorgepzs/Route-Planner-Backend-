
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from "typeorm";
  

@Entity("routes")
export class Routes {
@PrimaryGeneratedColumn("uuid")
id: string;

@Column({ type: "text",})
start_address: string;

@Column({ type: "text" })
destinations: Array<string>;
}