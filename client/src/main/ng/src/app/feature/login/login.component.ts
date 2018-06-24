import {Component} from '@angular/core';
import {AuthService} from '../../core/service/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = formBuilder.group({
      username: null,
      password: null
    });
  }

  login() {
    this.authService.authenticate(this.form.value).pipe(debounceTime(400)).subscribe(result => {
      if (result) {
        this.router.navigate(['/']);
      } else {
        this.form.reset();
      }
    });
  }
}
