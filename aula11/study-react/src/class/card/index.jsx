import './Card.css'

export const Card = ({ title, description, image}) => {
    return(
        <div className='card-container'>
            <div className="card">
                <img src={image} alt={title} />
                <div className='infos-card'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}