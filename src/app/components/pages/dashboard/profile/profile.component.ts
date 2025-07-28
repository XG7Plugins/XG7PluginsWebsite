import {Component, OnInit} from '@angular/core';
import {DashboardFooterComponent} from '../dashboard-footer/dashboard-footer.component';
import {UserService} from '../../../../services/user/user.service';
import {ImgComponent} from '../../../utils/img/img.component';

@Component({
  selector: 'app-profile',
  imports: [
    DashboardFooterComponent,
    ImgComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements  OnInit {
  protected currentImage: string = ''


  constructor(
    protected userService: UserService,
  ) {
  }

  ngOnInit(): void {

    this.currentImage = this.userService.user?.profileIcon?? "";

  }

  onImageChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.currentImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

}
