import NavBar from "../navbar/Navbar";
import ProductList from "../product/components/ProductList";


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