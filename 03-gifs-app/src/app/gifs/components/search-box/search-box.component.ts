import { Component, ElementRef,ViewChild } from '@angular/core';
import { GifService } from '../../services/gif.service';


//El search tag, vendría a ser como el e.target.value. keyup analiza las teclas que pulsamos, searchTag es nuestro metodo, y el #txtTagInput(nombre libre) es la etiqueta que
//queremos que analice.
@Component({
  selector: 'gifs-search-box',
  template:`
  <h5>Buscar</h5>
  <input type="text" class="form-control" placeholder ='buscar gifs'
  (keyup.enter)="searchTag()"
  #txtTagInput
  >

  `
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput') //
  public tagInput!: ElementRef<HTMLInputElement>;
  public currentTag:string=""

  constructor(
    private gifService:GifService

  ) { }


  searchTag(){

    const newTag = this.tagInput.nativeElement.value

    this.gifService.searchTagService(newTag);

    this.tagInput.nativeElement.value=""


  }


}
