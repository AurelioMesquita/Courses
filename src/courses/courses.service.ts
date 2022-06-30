import { Courses } from './entities/courses.entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  private courses: Courses[] = [
    {
      id: 1,
      name: 'Fundamentos do framework',
      description: 'Fundamentos do framework',
      tags: ['node.js', 'nestjs', 'javascript'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((e) => e.id == Number(id));
  }
  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
    return createCourseDTO;
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course: Courses) => course.id == Number(id),
    );
    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id == Number(id),
    );
    if (indexCourse > 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
