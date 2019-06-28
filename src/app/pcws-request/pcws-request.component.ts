import { Component, OnInit } from '@angular/core';
import {AddressData} from "../address-data";
import {CodeRequest} from "../code-request";
import {PcwsService} from "../pcws.service";

@Component({
  selector: 'app-pcws-request',
  templateUrl: './pcws-request.component.html',
  styleUrls: ['./pcws-request.component.css']
})
export class PcwsRequestComponent implements OnInit {

  serviceTypes = ["ECONOMY", "PREMIUM"];

  message: String;
  image: String;

  pcwsUrl: string = 'https://bfh-pcws-mock.herokuapp.com/';
  codeRequest: CodeRequest = new CodeRequest(
    'allPermissions', 'PREMIUM',
    new AddressData('Max Muster', 'Musterstrasse 11', '9999', 'Musterhausen'));

  constructor(
    private pcwsService: PcwsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.pcwsUrl);
    console.log(this.codeRequest);
    this.pcwsService.createCode(this.pcwsUrl, this.codeRequest).subscribe(
      codeResponse => {
        this.setValues(codeResponse.message, codeResponse.code);
      },
      error => {
        console.log(error);
        this.setValues(new Date().toISOString() + ": An error occurred while requesting the code", null);
      }
    )
  }

  private setValues(message: String, code: String) {
    if (message) {
      this.message = message;
    } else {
      this.message = null;
    }

    if (code) {
      this.image = "data:image/png;base64," + code;
    } else {
      this.image = null;
    }
  }
}
