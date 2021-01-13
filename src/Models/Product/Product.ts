export default interface ProductFields {
    id: number;
    name: string;
    rawPrice: number;
    price: number;
    code: string;
    taxMethod: string;
    category: string;
    alertQuantity: number;
    productUnit: number;
    supplier: string;
    productDescription: string;
    productImage?: string;
}