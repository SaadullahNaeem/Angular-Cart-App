/**
 * Created by saad on 6/12/17.
 */
import {Pipe ,PipeTransform} from '@angular/core'

@Pipe({
  name:'sort'
})
export class SortPipe implements PipeTransform{
  transform(value:any[],attr:string):any{
    if(attr==='asc')
    {
      return value.sort();
    }
    else if (attr === 'dsc')
    {
      return value.sort().reverse();
    }

  }
}
