import BlogsList from "../../../components/Blogs/BlogsList/BlogsList";
import Filter from "../../../components/Filter/Filter";

const DashboardManageBlogs = () => {

    return (
        <div>
            <Filter placeholder='Search in your blogs' />
            <BlogsList usedFor="dashboard" />
        </div>
    )
}

export default DashboardManageBlogs