import * as m3o from "@m3o/m3o-node";

export class VehicleService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Lookup a UK vehicle by it's registration number
  lookup(request: LookupRequest): Promise<LookupResponse> {
    return this.client.call(
      "vehicle",
      "Lookup",
      request
    ) as Promise<LookupResponse>;
  }
}

export interface LookupRequest {
  // the vehicle registration number
  registration?: string;
}

export interface LookupResponse {
  // mot expiry
  mot_expiry?: string;
  // mot status
  mot_status?: string;
  // tax due data
  tax_due_date?: string;
  // type approvale
  type_approval?: string;
  // co2 emmissions
  co2_emissions?: number;
  // month of first registration
  month_of_first_registration?: string;
  // registration number
  registration?: string;
  // wheel plan
  wheelplan?: string;
  // date of last v5 issue
  last_v5_issued?: string;
  // engine capacity
  engine_capacity?: number;
  // fuel type e.g petrol, diesel
  fuel_type?: string;
  // make of vehicle
  make?: string;
  // tax status
  tax_status?: string;
  // year of manufacture
  year_of_manufacture?: number;
  // colour of vehicle
  colour?: string;
}
