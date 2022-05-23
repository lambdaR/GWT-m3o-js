import * as m3o from "@m3o/m3o-node";

export class MovieService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Search for movies by simple text search
  search(request: SearchRequest): Promise<SearchResponse> {
    return this.client.call(
      "movie",
      "Search",
      request
    ) as Promise<SearchResponse>;
  }
}

export interface MovieInfo {
  original_language?: string;
  overview?: string;
  popularity?: number;
  id?: number;
  original_title?: string;
  poster_path?: string;
  release_date?: string;
  vote_average?: number;
  adult?: boolean;
  video?: boolean;
  genre_ids?: number[];
  title?: string;
  vote_count?: number;
  backdrop_path?: string;
}

export interface SearchRequest {
  // a text query to search
  query?: string;
  // a ISO 3166-1 code to filter release dates.
  region?: string;
  // year of making
  year?: number;
  // a ISO 639-1 value to display translated data
  language?: string;
  // page to query
  page?: number;
  // year of release
  primary_release_year?: number;
}

export interface SearchResponse {
  total_results?: number;
  page?: number;
  results?: MovieInfo[];
  total_pages?: number;
}
