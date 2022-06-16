import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { StudentModel } from 'src/Models/student';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  _url = 'http://localhost:3000';
  constructor(private _http: HttpClient) {}

  // GET Request
  getStudentsList() {
    return this._http
      .get<StudentModel[]>(`${this._url}/students`)
      .pipe(map((studentsList) => studentsList));
  }

  //POST Request
  postStudentData(payload: StudentModel) {
    return this._http
      .post<StudentModel>(`${this._url}/students`, payload)
      .pipe(map((studentData) => studentData));
  }

  //PUT Request
  putStudentDate(payload: StudentModel, id: number) {
    return this._http
      .put<StudentModel>(`${this._url}/students/${id}`, payload)
      .pipe(map((studentData) => studentData));
  }

  //DELETE Request
  deleteStudent(id: number) {
    return this._http
      .delete<StudentModel>(`${this._url}/students/${id}`)
      .pipe(map((studentObj) => studentObj));
  }
}
