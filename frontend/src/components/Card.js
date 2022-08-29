import React from "react"

export default function Card({ publication }) {

    //<button onClick={() => handleRedirect(publications.id)} className="btn btn-outline-success">Más información</button>
    return (
        <div className="container">
            <div className="post">
                <div className="header_post">
                    <img src="" alt="" />
                </div>

                <div className="body_post">
                    <div className="post_content">

                        <h1>{publication.title}</h1>
                        <p>{publication.description}</p>

                        <div className="container_infos">
                            <div className="postedBy">
                                <span>Creado por</span>
                                {publication.createBy}
                            </div>

                            <div className="container_tags">
                                <span>Distancia</span>
                                <div className="tags">
                                    <ul>
                                        <li>{publication.distance}</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

