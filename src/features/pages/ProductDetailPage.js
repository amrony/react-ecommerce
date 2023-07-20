import NavBar from "../navbar/Navbar";
import ProductDetail from "../product/components/ProductDetail";
import ProductList from "../product/components/ProductList";


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