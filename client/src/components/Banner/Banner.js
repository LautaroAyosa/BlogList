
const Banner = (props) => {

    return (
        <div className="banner">
            <h1>{props.title}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default Banner