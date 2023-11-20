const CardDynamic = (props) => {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <a href="">{props.link}</a>
        </div>           
    )
}

export default CardDynamic