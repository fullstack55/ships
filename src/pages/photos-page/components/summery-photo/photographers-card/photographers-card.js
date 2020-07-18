import React from "react";
import './photographers-card.sass';
import CardWrapper from "../card-wrapper/card-wrapper";
import arrow from '../../../../../assets/images/desktop/photos/ArrowDown.svg'

const PhotographersCard = () => {
    return(
        <CardWrapper
            firstText={'Photographers'}
            secondText={'of this ship'}
            thirdText={'(36)'}
            className={'photographers-card'}>
            <div className={'photographers-card__wrapper'}>


                <div className={'photographers-card__wrapper__photographers'}>
                    <div className={'photographers-card__wrapper__photographers__column'}>
                        <div className={'photographers-card__wrapper__photographers__column__row'}>
                            <p>José Ricardo Rodriguez Montero</p>
                            <p>10 photos</p>
                        </div>
                        <div className={'photographers-card__wrapper__photographers__column__row'}>
                            <p>Pilot Frans</p>
                            <p>1 photos</p>
                        </div>
                        <div className={'photographers-card__wrapper__photographers__column__row'}>
                            <p>simonwp</p>
                            <p>2 photos</p>
                        </div>
                    </div>
                    <div className={'photographers-card__wrapper__photographers__column'}>
                        <div className={'photographers-card__wrapper__photographers__column__row'}>
                            <p>Willem Oldenburg</p>
                            <p>10 photos</p>
                        </div>
                        <div className={'photographers-card__wrapper__photographers__column__row'}>
                            <p>Dennis Mortimer</p>
                            <p>1 photos</p>
                        </div>
                        <div className={'photographers-card__wrapper__photographers__column__row'}>
                            <p>simonwp</p>
                            <p>2 photos</p>
                        </div>
                    </div>
                    <div className={'photographers-card__wrapper__photographers__column'}>
                        <div className={'photographers-card__wrapper__photographers__column__row'}>
                            <p>Andreas Hoppe</p>
                            <p>10 photos</p>
                        </div>
                        <div className={'photographers-card__wrapper__photographers__column__row'}>
                            <p>Michael Brakhage</p>
                            <p>1 photos</p>
                        </div>
                        <div className={'photographers-card__wrapper__photographers__column__row'}>
                            <p>EMF</p>
                            <p>2 photos</p>
                        </div>
                    </div>
                </div>



                <div className={'photographers-card__wrapper__cta'}>
                    <p>Click to open list</p>
                    <img src={arrow} alt="arrow"/>
                </div>

            </div>

        </CardWrapper>
    )
};

export default PhotographersCard;
