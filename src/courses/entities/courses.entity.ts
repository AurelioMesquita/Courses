import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { Tag } from './tag.entity';
import { v4 as uuidV4 } from 'uuid';
@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable({ name: 'courses_tags' })
  @ManyToMany((type) => Tag, (tag: Tag) => tag.courses, { cascade: true })
  tags: Tag[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return;
    }
    this.id = uuidV4();
  }
}
