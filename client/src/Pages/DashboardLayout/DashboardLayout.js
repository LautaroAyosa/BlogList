import { NavLink, Outlet, Navigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const DashboardLayout = () => {
    const user = JSON.parse(window.localStorage.getItem('loggedUser'))
    if ( user !== null ) {
        return (
            <div className='mainContainer'>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px'}}>
                    <h1>Welcome to your Dashboard!</h1>
                    <p>You can manage your blogs, your profile and much more from here</p>
                </div>
                <div className="col-2Container">
                    <Sidebar title='Dashboard'>
                        <NavLink to="/dashboard/" >Manage Blogs</NavLink>
                        <NavLink to="/dashboard/add-new-blog" >Add New Blog</NavLink>
                    </Sidebar>
                    <main className="">
                        <Outlet />
                    </main>
                </div>
            </div>
        )
    }

    return <Navigate to="/login" />
}

export default DashboardLayout