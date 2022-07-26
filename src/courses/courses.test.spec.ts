import { Tag } from './entities/tag.entity';
import { Course } from './entities/courses.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CoursesService } from './courses.service';
import { Connection, Repository } from 'typeorm';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

const createMockRespository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
});

describe('CousesService', () => {
  let service: CoursesService;
  let courseRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoursesService,
        { provide: Connection, useValue: {} },
        {
          provide: getRepositoryToken(Course),
          useValue: createMockRespository(),
        },
        { provide: getRepositoryToken(Tag), useValue: createMockRespository() },
      ],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
    courseRepository = module.get<MockRepository>(getRepositoryToken(Course));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('find one', () => {
    describe('buscar curso pelo id', () => {
      it('deve retornar o objeto course', async () => {
        const courseId = '1';
        const expectedCourse = {};

        courseRepository.findOne.mockReturnValue(expectedCourse);
        const course = await service.findOne(courseId);
        expect(course).toEqual(expectedCourse);
      });
      it('deve retornar noFoundException', () => {});
    });
  });
});
