import * as m3o from "@m3o/m3o-node";

export class CacheService {
  private client: m3o.Client;

  constructor(token: string) {
    this.client = new m3o.Client({ token: token });
  }
  // Decrement a value (if it's a number). If key not found it is equivalent to set.
  decrement(request: DecrementRequest): Promise<DecrementResponse> {
    return this.client.call(
      "cache",
      "Decrement",
      request
    ) as Promise<DecrementResponse>;
  }
  // Delete a value from the cache. If key not found a success response is returned.
  delete(request: DeleteRequest): Promise<DeleteResponse> {
    return this.client.call(
      "cache",
      "Delete",
      request
    ) as Promise<DeleteResponse>;
  }
  // Get an item from the cache by key. If key is not found, an empty response is returned.
  get(request: GetRequest): Promise<GetResponse> {
    return this.client.call("cache", "Get", request) as Promise<GetResponse>;
  }
  // Increment a value (if it's a number). If key not found it is equivalent to set.
  increment(request: IncrementRequest): Promise<IncrementResponse> {
    return this.client.call(
      "cache",
      "Increment",
      request
    ) as Promise<IncrementResponse>;
  }
  // List all the available keys
  listKeys(request: ListKeysRequest): Promise<ListKeysResponse> {
    return this.client.call(
      "cache",
      "ListKeys",
      request
    ) as Promise<ListKeysResponse>;
  }
  // Set an item in the cache. Overwrites any existing value already set.
  set(request: SetRequest): Promise<SetResponse> {
    return this.client.call("cache", "Set", request) as Promise<SetResponse>;
  }
}

export interface DecrementRequest {
  // The key to decrement
  key?: string;
  // The amount to decrement the value by
  value?: number;
}

export interface DecrementResponse {
  // The new value
  value?: number;
  // The key decremented
  key?: string;
}

export interface DeleteRequest {
  // The key to delete
  key?: string;
}

export interface DeleteResponse {
  // Returns "ok" if successful
  status?: string;
}

export interface GetRequest {
  // The key to retrieve
  key?: string;
}

export interface GetResponse {
  // Time to live in seconds
  ttl?: number;
  // The value
  value?: string;
  // The key
  key?: string;
}

export interface IncrementRequest {
  // The amount to increment the value by
  value?: number;
  // The key to increment
  key?: string;
}

export interface IncrementResponse {
  // The new value
  value?: number;
  // The key incremented
  key?: string;
}

export interface ListKeysRequest {}

export interface ListKeysResponse {
  keys?: string[];
}

export interface SetRequest {
  // Time to live in seconds
  ttl?: number;
  // The value to set
  value?: string;
  // The key to update
  key?: string;
}

export interface SetResponse {
  // Returns "ok" if successful
  status?: string;
}
