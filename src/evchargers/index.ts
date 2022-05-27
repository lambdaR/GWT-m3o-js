import * as m3o from "@m3o/m3o-node";

export class EvchargersService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Retrieve reference data as used by this API and in conjunction with the Search endpoint
  referenceData(request: ReferenceDataRequest): Promise<ReferenceDataResponse> {
    return this.client.call(
      "evchargers",
      "ReferenceData",
      request
    ) as Promise<ReferenceDataResponse>;
  }
  // Search by giving a coordinate and a max distance, or bounding box and optional filters
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "evchargers",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface Address {
  state_or_province?: string;
  title?: string;
  // Any comments about how to access the charger
  access_comments?: string;
  address_line_1?: string;
  address_line_2?: string;
  lat_lng?: string;
  location?: Coordinates;
  postcode?: string;
  country?: Country;
  country_id?: string;
  town?: string;
}

export interface BoundingBox {
  bottom_left?: Coordinates;
  top_right?: Coordinates;
}

export interface ChargerType {
  id?: string;
  // Is this 40KW+
  is_fast_charge_capable?: boolean;
  title?: string;
  comments?: string;
}

export interface CheckinStatusType {
  is_automated?: boolean;
  is_positive?: boolean;
  title?: string;
  id?: string;
}

export interface Connection {
  level?: ChargerType;
  // The level of charging power available
  level_id?: string;
  reference?: string;
  // The amps offered
  amps?: number;
  connection_type?: ConnectionType;
  // The power in KW
  power?: number;
  // The voltage offered
  voltage?: number;
  // The ID of the connection type
  connection_type_id?: string;
  // The current
  current?: string;
}

export interface ConnectionType {
  formal_name?: string;
  id?: string;
  is_discontinued?: boolean;
  is_obsolete?: boolean;
  title?: string;
}

export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

export interface Country {
  continent_code?: string;
  id?: string;
  iso_code?: string;
  title?: string;
}

export interface CurrentType {
  id?: string;
  title?: string;
  description?: string;
}

export interface DataProvider {
  website?: string;
  comments?: string;
  data_provider_status_type?: DataProviderStatusType;
  id?: string;
  // How is this data licensed
  license?: string;
  title?: string;
}

export interface DataProviderStatusType {
  id?: string;
  is_provider_enabled?: boolean;
  title?: string;
}

export interface Operator {
  comments?: string;
  contact_email?: string;
  phone_primary?: string;
  phone_secondary?: string;
  fault_report_email?: string;
  id?: string;
  // Is this operator a private individual vs a company
  is_private_individual?: boolean;
  title?: string;
  website?: string;
}

export interface Poi {
  // The connections available at this charge point
  connections?: Connection[];
  // The type of usage
  usage_type?: UsageType;
  // The type of usage for this charger point (is it public, membership required, etc)
  usage_type_id?: string;
  // The ID of the charger
  id?: string;
  // The number of charging points
  num_points?: number;
  // The operator
  operator?: Operator;
  // The ID of the operator of the charger
  operator_id?: string;
  // The address
  address?: Address;
  // The cost of charging
  cost?: string;
  // The ID of the data provider
  data_provider_id?: string;
}

export interface ReferenceDataRequest {}

export interface ReferenceDataResponse {
  // The types of charger
  charger_types?: ChargerType[];
  // The types of checkin status
  checkin_status_types?: CheckinStatusType[];
  // The types of connection
  connection_types?: ConnectionType[];
  // The companies operating the chargers
  operators?: Operator[];
  // The status of the charger
  status_types?: StatusType[];
  // The types of user comment
  user_comment_types?: UserCommentType[];
  // The countries
  countries?: Country[];
  // The types of current
  current_types?: CurrentType[];
  // The providers of the charger data
  data_providers?: DataProvider[];
  // The status of a submission
  submission_status_types?: SubmissionStatusType[];
  // The different types of usage
  usage_types?: UsageType[];
}

export interface SearchRequest {
  // IDs of the connection type
  connection_types?: string[];
  // Coordinates from which to begin search
  location?: Coordinates;
  // Minimum power in KW. Note: data not available for many chargers
  min_power?: number;
  // Bounding box to search within (top left and bottom right coordinates)
  box?: BoundingBox;
  // Search distance from point in metres, defaults to 5000m
  distance?: number;
  // Supported charging levels
  levels?: string[];
  // Maximum number of results to return, defaults to 100
  max_results?: number;
  // IDs of the the EV charger operator
  operators?: string[];
  // Usage of the charge point (is it public, membership required, etc)
  usage_types?: string[];
  // Country ID
  country_id?: string;
}

export interface SearchResponse {
  pois?: Poi[];
}

export interface StatusType {
  is_operational?: boolean;
  title?: string;
  id?: string;
}

export interface SubmissionStatusType {
  id?: string;
  is_live?: boolean;
  title?: string;
}

export interface UsageType {
  title?: string;
  id?: string;
  is_access_key_required?: boolean;
  is_membership_required?: boolean;
  is_pay_at_location?: boolean;
}

export interface UserCommentType {
  id?: string;
  title?: string;
}
