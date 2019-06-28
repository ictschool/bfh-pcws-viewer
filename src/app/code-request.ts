import {AddressData} from "./address-data";

export class CodeRequest {
  constructor(
    public accountName: string,
    public serviceType: string,
    public addressData: AddressData
  ) {}
}
