import NavBar from "../navbar/Navbar";
import ProductDetail from "../product-list/components/ProductDetail";
import ProductList from "../product-list/components/ProductList";


function ProductDetailPage() {
    return (
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
        </div>
    );
}

export default ProductDetailPage;