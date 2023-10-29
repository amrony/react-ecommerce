import AdminOrders from "../admin/components/AdminOrders";
import NavBar from "../navbar/Navbar"


function AdminOrdersPage() {
    return (
        <div>
            <NavBar>
                <AdminOrders></AdminOrders>
            </NavBar>
        </div>
    );
}

export default AdminOrdersPage;