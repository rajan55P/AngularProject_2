import { Component } from '@angular/core';
import { FileProcessingService } from '../../services/file-processing-service.service';

@Component({
  selector: 'app-file-processing',
  templateUrl: './file-processing.component.html',
  styleUrls: ['./file-processing.component.css' ] // Changed styleUrl to styleUrls
})
export class FileProcessingComponent {

  constructor(private fileProcessingService: FileProcessingService) {}

  processFile(): void { // Changed from : to { and specified return type
      this.fileProcessingService.processFile().subscribe(
          (response) => {
              console.log('File processed successfully:', response);
          },
          (error) => {
              console.error('Error processing file:', error);
          }
      );
  }
}
