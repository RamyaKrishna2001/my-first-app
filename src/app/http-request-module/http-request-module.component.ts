import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../http-request-module/api.service';
import { StudentModel } from 'src/Models/student';

@Component({
  selector: 'app-http-request-module',
  templateUrl: './http-request-module.component.html',
  styleUrls: ['./http-request-module.component.css'],
})
export class HttpRequestModuleComponent implements OnInit {
  studentValue!: FormGroup;
  studentObj: StudentModel;
  studentsList: StudentModel[];
  studentId: number;
  toUpdateStudentObj: StudentModel;

  constructor(private api: ApiService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.studentValue = this.formBuilder.group({
      studentName: [''],
      class: [''],
      email: [''],
      phoneNo: [''],
    });
    this.getStudents();
  }

  onAddStudent(): void {
    this.studentObj = this.studentValue.value;
    this.api.postStudentData(this.studentObj).subscribe({
      next: (studentObj) => console.log(studentObj),
      error: (e) => console.log(e),
      complete: () => {
        alert('Student record Created 👍');
        this.getStudents();
        this.studentValue.reset();
      },
    });
  }

  getStudents() {
    this.api.getStudentsList().subscribe((res) => {
      this.studentsList = res;
    });
  }

  getStudentId(id: number) {
    this.studentId = id;
  }

  removeStudent() {
    this.api.deleteStudent(this.studentId).subscribe({
      error: (e) => console.log(e),
      complete: () => {
        this.getStudents();
      },
    });
  }

  sendStudentObj(studentObj: StudentModel) {
    this.toUpdateStudentObj = { ...studentObj };
  }

  updateUser() {
    this.api
      .putStudentDate(this.toUpdateStudentObj, this.toUpdateStudentObj.id)
      .subscribe({
        error: (e) => console.log(e),
        complete: () => this.getStudents(),
      });
  }
}
