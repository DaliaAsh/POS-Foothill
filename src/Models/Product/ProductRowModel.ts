export interface ProductRowModel {
    productId: number;
    code: string;
    name: string;
    category: string;
    productDescription: string;
    tax?: number;
    taxMethod: string;
    price: number;
    purchasePrice: number;
    productUnit: number;
    alertQuantity: number;
    action: JSX.Element;
    supplier: string;
    inputImage?: string;
}