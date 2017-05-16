import { Component, OnInit, Input } from '@angular/core';
import { GlobalDataService } from '../../service/globaldata.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
	@Input() inputRecieve: number;
	private inputRecieveSubject: number = 0;
	
  constructor(private globalData: GlobalDataService) {
		this.globalData.subjectData.subscribe((data) => {
			this.inputRecieveSubject = data;
    });
	}
  ngOnInit() {
  }

}
