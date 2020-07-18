import React from "react";
import './most-popular.sass'
import PropTypes from 'prop-types';
import Typography from "../../../../../components/common/typography/typography";
import ShipItem from "../../most-popular-photos/components/shipItem/ShipItem";

const MostPopular = ({secondText}) => {
    return(
        <div className={'most-popular-container'}>
            <Typography firstText={'Most popular'} secondText={secondText} before/>
            <div className={'most-popular-container__row'}>
               <div>
                   <ShipItem
                     url={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU'}
                     firstTitle={'© Michael Schindler'}
                     secondTitle={'Added 6 minutes ago'}
                     withLike={true}
                   />
                   <ShipItem
                     url={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU'}
                     firstTitle={'© Michael Schindler'}
                     secondTitle={'Added 6 minutes ago'}
                     withLike={true}
                   />
                   <ShipItem
                     url={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU'}
                     firstTitle={'© Michael Schindler'}
                     secondTitle={'Added 6 minutes ago'}
                     withLike={true}
                   />
                   <ShipItem
                     url={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_OOv8kFrm304MrhCgJsYutlNuG1Zr3o751g&usqp=CAU'}
                     firstTitle={'© Michael Schindler'}
                     secondTitle={'Added 6 minutes ago'}
                     withLike={true}
                   />
               </div>
                <div className={'most-popular-container__row__more'}>
                    View <br/>
                    more
                </div>
            </div>
        </div>
    )
};
MostPopular.propTypes = {
    secondText: PropTypes.string,
};

export default MostPopular;
