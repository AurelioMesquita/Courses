import { DataSource } from 'typeorm';
import { CoursesRefactoringTest1658252821210 } from './migrations/CoursesRefactoringTest';
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
        entities: [__dirname + '/../**/*.entity.js'],
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
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    CoursesRefactoringTest1658252821210,
    CreateTagsTable1658254209820,
  ],
});
