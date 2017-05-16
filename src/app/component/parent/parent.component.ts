import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GlobalDataService } from '../../service/globaldata.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
	private dataOutput: number = 0;
	private dataSubject: number = 0;
	@Output() emmiter = new EventEmitter();
  constructor(public globalService: GlobalDataService) { }

  ngOnInit() {
  }

}
