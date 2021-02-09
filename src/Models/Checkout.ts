import ProductOrder from "./Product/ProductOrder";
export default interface Checkout {
    checkoutId: number;
    clientName: string;
    barCodeScanner: string;
    productsOrders: ProductOrder[];
    total: number;
    itemsNumber: number;
}