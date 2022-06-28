import { CoursesService } from './courses.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  findAll(@Res() response) {
    return response.status(200).send('Listagem de cursos');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }

  @Patch('id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualizacao do curso ${id}`;
  }
  @Delete('id')
  remove(@Param('id') id: string) {
    return `Exclusao do curso ${id}`;
  }
}
