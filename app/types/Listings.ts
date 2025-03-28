export interface Listing {
    id: number;
    title: string;
    price: number;
    photoUrl: string;
  }
  
  export interface ListingsResponse {
    content: Listing[];
    totalElements: number;
    totalPages: number;
    size: number;
    page: number;
  }
  