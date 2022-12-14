import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeData: any[], pipeModifier: any):any {
    return pipeData.filter(eachItem=>{
      return(
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) 
        // ||
        // eachItem['age'].toLowerCase().includes(pipeModifier.toLowerCase()) 
        // ||
        // eachItem['city'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
