import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
  imports: [FormsModule]
})

export class PasswordGeneratorComponent {
  password: string = '';
  length: number = 12;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  includeUppercase: boolean = false;
  includeLowercase: boolean = false;

  generatePassword(): void {
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    let characters = '';
    if (this.includeNumbers) characters += numbers;
    if (this.includeSymbols) characters += symbols;
    if (this.includeUppercase) characters += uppercase;
    if (this.includeLowercase) characters += lowercase;

    if (!characters.length) {
      this.password = 'Select at least one option';
      return;
    }

    this.password = Array.from({ length: this.length }, () =>
      characters[Math.floor(Math.random() * characters.length)]
    ).join('');
    
  }

  copyToClipboard(): void {
    if (navigator.clipboard && this.password) {
      navigator.clipboard.writeText(this.password).then(() => {
        alert('Password copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  }
  
}
