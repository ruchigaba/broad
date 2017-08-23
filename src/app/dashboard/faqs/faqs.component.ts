import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonAPICall} from '../../shared/shared.service';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
   //styleUrls: ['./faqs.component.scss'] ,
  encapsulation: ViewEncapsulation.None,
  providers: [CommonAPICall]
})
export class FaqComponent implements OnInit {

  public faqs: any;
  quesArr = [];
ansArr = [];
  num:number;
  isClassVisible= false;
  constructor(private _commonApi:CommonAPICall,private router:Router) { }
  ngOnInit() {
    window.scrollTo(0, 0);
    this.getFAQService();
   document.getElementsByTagName("html")[0].removeAttribute("class");  
  }
getFAQService(){
  this._commonApi.getService("users/faqs","","application/json")
  .subscribe(res => {

      this.faqs=res.result.faqs;
      console.log(res);
let keyArr: any[] = Object.keys(this.faqs);
        // loop through the object, pushing values to the return array
        keyArr.forEach((key: any) => {
            let k: string = key;
            if(k.startsWith("quest")) {

                this.quesArr.push(this.faqs[key]);
                // console.log(k + this.faqs[key]);
            }else if(k.startsWith("ans")) {
                this.ansArr.push(this.faqs[key]);
                // console.log(k + this.faqs[key]);
            }
            //console.log(this.quesArr);
        });
    })
}

cls(i,question) {
  // question.style.display="block";
  var divv = document.getElementById('collapse-'+i);
  var divv1 = document.getElementById('question-'+i);

  this.isClassVisible = !this.isClassVisible;
  var state = divv.style.display;
  if(state=="none") {
    divv.style.display = "block";
    divv1.className='panel-heading my-class2';
  } else {
    divv1.className = 'panel-heading my-class';
      divv.style.display = "none";
  }
}
  
  asdf(i, btntype) {
    if(btntype == 'save'){
  var edit_ques = (<HTMLInputElement>document.getElementById('qe-' + i)).value;
  document.getElementById("qstn-"+i).innerHTML = edit_ques;
}
    var q = document.getElementById('q-'+i);
    var qe = document.getElementById('qe-'+i);
    var a = document.getElementById('a-'+i);
    var ae = document.getElementById('ae-'+i);
    var bt_edit = document.getElementById('bt-edit-'+i);

    var bt_save = document.getElementById('bt-save-'+i);

    var bt_cancel = document.getElementById('bt-cancel-'+i);

    var bt_del= document.getElementById('bt-del-'+i);

    if(bt_edit.className == "btt") {
      bt_edit.className = "btt2";
      bt_save.className = "btt";
      bt_cancel.className = "btt";
      bt_del.className = "btt2";
      a.className = "hide";
      ae.className = "a-edit";
      q.className = "hide";
      qe.className = "q-edit";
    } else {
      bt_edit.className = "btt";
      bt_save.className = "btt2";
      bt_cancel.className = "btt2";
      bt_del.className = "btt";
      a.className = "panel-body";
      ae.className = "hide";
      q.className = "faqscollapse";
      qe.className = "hide";
    }
  }

  addC() {
    this.quesArr.unshift("New Quest");
    this.ansArr.unshift("New Ans");
  }

}
