import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
@Input() visible:Boolean = false
@Input() notFoundMessage:string = "Not Found"
@Input() resetLinkText:string = "Go To Homepage"
@Input() resetLink:string = ""
}
