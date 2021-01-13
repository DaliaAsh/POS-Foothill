import Product from "../Product/Product";
import ProductOrderModel from "../Product/ProductOrder";
interface ProductModel extends Product {
    _id: string;
}
export default interface State {
    products: ProductModel[];
    productsOrders: ProductOrderModel[];
}