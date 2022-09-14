import BlogsList from "../../components/Blogs/BlogsList/BlogsList";
import CreateBlogsForm from "../../components/Blogs/CreateBlogs/CreateBlogsForm/CreateBlogsForm";
import Filter from '../../components/Filter/Filter'

const Dashboard = () => {

    return (
        <div>
            <CreateBlogsForm />
            <Filter />
            <BlogsList usedFor='dashboard' />
        </div>
    )
}

export default Dashboard