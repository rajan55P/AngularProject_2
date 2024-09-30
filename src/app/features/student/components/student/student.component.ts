import { Component } from '@angular/core';
import { StudentDataService } from '../../services/student-data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  studentCount: number = 0; // Initialize the count to 0

  constructor(private studentDataService: StudentDataService) {}

  generateData() {
    if (this.studentCount > 0) {
      this.studentDataService.generateStudentData(this.studentCount).subscribe(
        (response) => {
          console.log('Student data generated:', response);
          // Handle success, such as showing a success message
        },
        (error) => {
          console.error('Error generating student data:', error);
          // Handle error, such as showing an error message
        }
      );
    } else {
      console.warn('Please enter a valid number of students');
      // Optionally, display a message to the user to enter a valid count
    }
  }
}
