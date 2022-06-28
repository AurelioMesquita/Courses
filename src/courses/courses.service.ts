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
    return;
  }

  update(id: string, updateCourseDto: any) {
    let indexCourse = this.courses.findIndex((courses) => {
      courses.id == Number(id);

      this.courses[indexCourse] = updateCourseDto;
    });
  }

  remove(id: string) {
    let indexCourse = this.courses.findIndex((courses) => {
      courses.id == Number(id);

      if (indexCourse > 0) {
        this.courses.splice(indexCourse, 1);
      }
    });
  }
}
