import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { Student } from "./Students";

@Entity()
export class Course{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

    @ManyToOne(type=> Student, student=>student.course)
    student:Student;
}