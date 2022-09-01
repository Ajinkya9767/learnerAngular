import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  name : string;
  age : number;
  city : string;
  index : number;
  artists : any;
  currentArtist : object;


  constructor(private http:HttpClient){
    this.name = '';
    this.age = 0;
    this.city = '';
    this.index = 0;
  }

  showArtist(e:any, item: any){
    console.log(item);
    this.name = item.name;
    this.age = item.age;
    this.city = item.city;
    item.hightlight = !item.hightlight;
    this.currentArtist = item;
  }

  ngOnInit(): void {
    this.http.get<object>('../assets/data.json').subscribe(
      data =>{
        this.artists = data;
      }
    )
    throw new Error('Method not implemented.');
  }

}
