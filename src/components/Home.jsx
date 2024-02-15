import React from 'react';
import CardDisplay from './CardDisplay';

const Home = ({ data }) => {
    return (
        <div>
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 justify-content-center">
                    {data.map((item, index) => {
                        return (
                            <>
                                <CardDisplay item={item} index={index} />
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;