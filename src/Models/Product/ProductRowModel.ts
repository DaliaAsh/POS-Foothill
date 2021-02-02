export interface ProductRowModel {
    id: number;
    code: string;
    name: string;
    category: string;
    description: string;
    tax?: number;
    taxMethod: string;
    rawPrice: number;
    price: number;
    productUnit: number;
    alertQuantity: number;
    action: JSX.Element;
    supplier: string;
    inputImage?: string;
}