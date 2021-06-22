import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("animal")
export class Animal {

    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ length: 500 , nullable: true })
    name: string;

    @Column({ length: 500 , nullable: true })
    type: string;

    @Column({type: 'date', nullable: true })
    birthDay: string;

    @Column({ nullable: true })
    breed: string;

    @Column({ type: 'timestamptz' , nullable: true  }) 
    lastVacDate: Date;

    @Column({ type: 'timestamptz' , nullable: true  }) 
    nextVacDate: Date;

}