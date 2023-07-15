import NavBar from "../navbar/Navbar";
import ProductList from "../product-list/ProductList";


function Home() {
    return (
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
    );
}

export default Home;