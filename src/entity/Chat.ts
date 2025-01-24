import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

Entity();
export class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  from: number;

  @Column()
  to: number;

  @Column()
  message: string;

  @Column()
  timestamp: Date;
}
