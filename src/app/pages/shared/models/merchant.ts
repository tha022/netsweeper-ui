interface MerchantInterface {
    id?: string;
    merchantName?: string; 
    username?: string; 
    email?: string;
    password?: string;
    adressOne?: string;
    adressTwo?: string; 
    city?: string;
    state?: string; 
    postal?: string;
    country?: string; 
    phone?: string;
    vat?: string;
}

export class Merchant implements MerchantInterface {
    id?: string;
    merchantName?: string; 
    username?: string; 
    email?: string;
    password?: string;
    adressOne?: string;
    adressTwo?: string; 
    city?: string;
    state?: string; 
    postal?: string;
    country?: string; 
    phone?: string;
    vat?: string;
}
