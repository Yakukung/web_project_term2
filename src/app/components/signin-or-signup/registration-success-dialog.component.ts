// registration-success-dialog.component.ts
import { Component } from '@angular/core';


@Component({
  selector: 'app-registration-success-dialog',
  template: `
    <div class="dialog-container">
      <h2 class="title">Registration Successful!</h2>
      <p class="message">You have successfully registered. Welcome to FaceMash!</p>
      <button class="btn" (click)="closeDialog()">Close</button>
    </div>
  `,
  styles: [
    `
      .dialog-container {
        text-align: center;
        padding: 16px;
        border-radius: 30px;
        
      }

      .icon {
        font-size: 48px;
        color: green;
        margin-bottom: 16px;
      }

      .title {
        font-size: 24px;
        margin-bottom: 8px;
      }

      .message {
        font-size: 16px;
        margin-bottom: 16px;
      }

      .btn {
        margin-top: 16px;
        cursor: pointer;
        padding: 8px 16px;
        background-color: #F51E3C;
        color: white;
        border-radius: 11px;
      }
    `,
  ],
})
export class RegistrationSuccessDialogComponent {
  closeDialog() {
    // Reload the current page
    location.reload();
  }
}
