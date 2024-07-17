import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  route:Router = inject(Router)

  search(term:string){
    this.route.navigate(['/search/'+term])
  }
  
}
