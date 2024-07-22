import { Component, inject } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  isLoading!:boolean
  loadingService:LoadingService = inject(LoadingService)

  constructor(){
    this.loadingService.isLoading.subscribe(
      (isLoading:boolean)=>{
        this.isLoading = isLoading
        }
    )
  }

}
