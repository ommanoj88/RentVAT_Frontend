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
  export interface ListingProfilePage {
    id: number;
    title: string;
    description: string;
    address: string;
    city: string;
    createdAt: string;
    category: string;
    price1Day: number;
    price3Days: number;
    price7Days: number;
    salePrice: number | null;
    availableForRent: boolean;
    availableForSale: boolean;
    owner: {
      id: number;
      uid: string;
      username: string;
      email: string;
    };
  }