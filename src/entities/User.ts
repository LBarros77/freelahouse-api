import { 
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
	
	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column({ default: true })
	activate: boolean;

	@CreateDateColumn()
	creatAt: Date;

	@UpdateDateColumn()
	updateAt: Date;
}