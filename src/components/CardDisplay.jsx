import React from 'react';
import './style/Cards.css'
const CardDisplay = ({ item, index }) => {
    return (

        <div key={index} style={{ margin: "2em 0em" }}>
            <div class="col mb-5 h-100">
                <div class="card  h-100" id="cards-w">
                    <div class="h-25">
                        <img src={item.image} class="card-img-top" alt="..."></img>

                    </div>
                    <div class="card-body p-4">
                        <h3 class="fw-bolder" style={{ margin: "3.2em 0em 0.5em 0em" }}>{item.head}</h3>
                        <p class="text-muted">{item.content}</p>
                        <a class="icon-link icon-link-hover link-success text-decoration-none" href="#">
                            Read More
                            <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
                        </a>

                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">{item.date} {item.month}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDisplay;
