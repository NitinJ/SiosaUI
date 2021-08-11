import { UtilsModule } from './../../utils/utils.module';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public data: any = [];
  public error = false;

  constructor(private http: HttpClient,
    private router: Router,
    private utils: UtilsModule) { }

  ngOnInit(): void {
  }

  onClickSubmit(data: any) {}

  registerUser(licenseKey: any) {
    const url = this.utils.getServerUrl('/license/register');
    this.error = false;
    this.http.post(url, {key: licenseKey}).subscribe((res: any) => {
      if (!res.status) {
        this.error = true;
        return;
      }
      if (res.details.valid) {
        this.router.navigateByUrl('/config');
      }
    }, (err) => {});
  }

}
