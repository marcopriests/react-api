import React from 'react'

const Card = ({ act }) => {
    return (
        <div className="col p-3">
            <div className="card border-0 shadow min-vh-100">
                <img src={act.image} alt="" className="card-img-top" />

                <div className="card-body">
                    <h5 className="card-title">{act.name}</h5>
                    <span className="card-info text-secondary">{act.birth_year} - {act.nationality}</span>
                    <p className="card-text">{act.biography}</p>
                    <span className="card-awards fst-italic text-success">{act.awards}</span>
                </div>
            </div>
        </div >
    )
}

export default Card
