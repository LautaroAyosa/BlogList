import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {

    return (
        <div>
            <div className="banner">
                <h1>Welcome to your Dashboard!</h1>
                <p>You can manage your blogs, your profile and much more from here</p>
            </div>
            <div className="col-2Container">
                <Sidebar title='Dashboard'>
                    <NavLink to="/dashboard/manage-blogs" >Manage Blogs</NavLink>
                    <NavLink to="/dashboard/add-new-blog" >Add New Blog</NavLink>
                </Sidebar>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout