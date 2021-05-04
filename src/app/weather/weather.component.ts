import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  // @ts-ignore
  public weatherSearchForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }
  // @ts-ignore
  sendToAPI(formValues) {
    console.log(formValues);


  }

}
