import * as m3o from "@m3o/m3o-node";

export class PlaceService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Find places nearby using a location
  nearby(request: NearbyRequest): Promise<NearbyResponse> {
    return this.client.call(
      "place",
      "Nearby",
      request
    ) as Promise<NearbyResponse>;
  }
  // Search for places by text query
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "place",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface AutocompleteRequest {}

export interface AutocompleteResponse {}

export interface NearbyRequest {
  // specify the location by lat,lng e.g -33.8670522,-151.1957362
  location?: string;
  // Name of the place to search for
  name?: string;
  // Whether the place is open now
  open_now?: boolean;
  // radius in meters within which to search
  radius?: number;
  // Type of place. https://developers.google.com/maps/documentation/places/web-service/supported_types
  type?: string;
  // Keyword to include in the search
  keyword?: string;
}

export interface NearbyResponse {
  results?: Result[];
}

export interface Result {
  // address of place
  address?: string;
  // url of an icon
  icon_url?: string;
  // lat/lng of place
  location?: string;
  // name of the place
  name?: string;
  // rating from 1.0 to 5.0
  rating?: number;
  // feature types
  types?: string[];
  // open now
  open_now?: boolean;
  // opening hours
  opening_hours?: string[];
  // type of location
  type?: string;
  // simplified address
  vicinity?: string;
}

export interface SearchRequest {
  // radius in meters within which to search
  radius?: number;
  // Type of place. https://developers.google.com/maps/documentation/places/web-service/supported_types
  type?: string;
  // the location by lat,lng e.g -33.8670522,-151.1957362
  location?: string;
  // Whether the place is open now
  open_now?: boolean;
  // the text string on which to search, for example: "restaurant"
  query?: string;
}

export interface SearchResponse {
  results?: Result[];
}
