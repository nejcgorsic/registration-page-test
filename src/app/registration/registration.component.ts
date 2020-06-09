import {
  Component,
  OnInit
} from '@angular/core';

import {
  User
} from '../shared/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  };
  password: string;
  confirmPassword: string;
  errorsList: string[];

  constructor() {
  }

  ngOnInit(): void {
  }


  checkValidity() {
    if (this.isDataVerified()) {
      alert('User successfully created!');
      this.refresh();
    }
  }

  isDataVerified(): boolean {
    const usernameCheck = /.{8,}/;
    const passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    this.errorsList = [];

    // USERNAME CHECK
    if (!this.user.username) {
      this.errorsList.push('username');
    } else if (!this.user.username.match(usernameCheck)) {
      this.errorsList.push('usernameMatch');
    }
    // PASSWORD CHECK
    if (!this.user.password) {
      this.errorsList.push('password');
    }
    if (!this.user.confirmPassword) {
      this.errorsList.push('confirmPassword');
    }
    if (!this.doPasswordsMatch(this.user.password, this.user.confirmPassword)) {
      this.errorsList.push('passwordsDoNotMatch');
    }
    if (!this.user.password.match(passCheck)) {
      this.errorsList.push('passwordMatch');
    }

    // EMAIL CHECK
    if (this.showHide() && !this.user.email) {
      this.errorsList.push('email');
    }

    return this.errorsList.length === 0;
  }

  doPasswordsMatch(password: string, confirmPassword: string): boolean {
    return password && confirmPassword && password === confirmPassword;
  }

  refresh() {
    window.location.reload();
  }

  showHide(): boolean {
    return !this.isUsernameEmail(this.user.username);
  }

  isUsernameEmail(usernameFieldInput: string): boolean {
    // checking if our string in the first field (username field) matches the regex rules for an email or not
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(usernameFieldInput);
  }

  errorsContainsControl(controlName: string): boolean {
    return this.errorsList && this.errorsList.find(x => x === controlName) != null;
  }

}
