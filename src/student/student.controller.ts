import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentsById(@Param('studentId') studentId: string) {
    console.log(studentId);
    return `Get Student With Id of ${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    console.log(body);
    return 'Create Student';
  }

  @Put(':/studentId')
  updateStudent() {
    return 'Update Student By Id';
  }
}
