import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifService } from '../../../gifs/services/gif.service';

@Component({
    selector: 'shared-sidebar',
    templateUrl: "./sidebar.component.html",
    styleUrl: './sidebar.component.css',

})
export class SidebarComponent {


constructor(

private gifService:GifService

){}

get tags():string[]{

  return this.gifService.tagsHistory
}


searchTag(tag:string):void{
  this.gifService.searchTagService(tag)
}
 }
