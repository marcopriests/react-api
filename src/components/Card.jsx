import React from 'react'

const Card = ({ actress }) => {
    return (
        <div className="col p-3">
            <div className="card border-0 shadow min-vh-100">
                <img src={actress.image} alt="" className="card-img-top" />

                <div className="card-body">
                    <h5 className="card-title">{actress.name}</h5>
                    <span className="card-info text-secondary">{actress.birth_year} - {actress.nationality}</span>
                    <p className="card-text">{actress.biography}</p>
                    <span className="card-awards fst-italic text-success">{actress.awards}</span>
                </div>
            </div>
        </div >
    )
}

export default Card
