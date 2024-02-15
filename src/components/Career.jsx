import React from 'react';
import CardDisplay from './CardDisplay';

const Career = ({ data }) => {
    const CareerDevelopmentData = data.filter((item) => item.head === 'Career Development')
    return (
        <div>
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 justify-content-center">
                    {CareerDevelopmentData.map((item, index) => {
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

export default Career;