import { NavLink, Outlet } from "react-router-dom";
import BlogsList from "../../components/Blogs/BlogsList/BlogsList";
import CreateBlogsForm from "../../components/Blogs/CreateBlogs/CreateBlogsForm/CreateBlogsForm";
import Filter from '../../components/Filter/Filter'

const DashboardLayout = (props) => {
    console.log(props)
    return (
        <div>
            <aside>
                <NavLink to="/dashboard/add-new-blog" >Hello</NavLink>
            </aside>
            <main>
                <h1>Welcome to your Dashboard!</h1>
                <p>You can manage your blogs, your profile and much more from here</p>
                <Outlet />
            </main>
            
        </div>
    )
}

export default DashboardLayout