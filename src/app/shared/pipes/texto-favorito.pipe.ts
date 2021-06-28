import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textoFavorito'
})
export class TextoFavoritoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return args[0] ? value + ` 💓` : value ;
    
  }

}
