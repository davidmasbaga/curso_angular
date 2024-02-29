
import {  Component, Input } from '@angular/core';

import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'gif-card-list',
    templateUrl:'./gif-card-list.component.html',
    styleUrl: './gif-card-list.component.css',

})
export class GifCardListComponent {

@Input()
public gifList: Gif[] =[]








}
