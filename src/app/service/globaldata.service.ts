import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()

export class GlobalDataService {
  public subjectData: Subject<number> = new Subject();
	public globalData: any = 0;
  constructor() { }
}
