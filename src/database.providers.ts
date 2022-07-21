import { DataSource } from 'typeorm';
import { AddCoursesIdToCoursesTagsTable1658340576790 } from './migrations/AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1658341844465 } from './migrations/AddTagsIdToCoursesTagsTable';
import { CoursesRefactoringTest1658252821210 } from './migrations/CoursesRefactoringTest';
import { CreateCoursesTagsTable1658340194832 } from './migrations/CreateCoursesTagsTable';
import { CreateTagsTable1658254209820 } from './migrations/CreateTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'cursonestjs',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'cursonestjs',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [
    CoursesRefactoringTest1658252821210,
    CreateTagsTable1658254209820,
    AddCoursesIdToCoursesTagsTable1658340576790,
    AddTagsIdToCoursesTagsTable1658341844465,
    CreateCoursesTagsTable1658340194832,
  ],
});
