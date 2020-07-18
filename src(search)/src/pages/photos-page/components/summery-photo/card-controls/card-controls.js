import React from "react";
import CardWrapper from "../card-wrapper/card-wrapper";
import './card-controls.sass'
import Button from "../../../../../components/common/button/button";

const CardControls = () => {
    return(
        <div className={'card-controls'}>
            <div className={'card-controls__flex'}>
                <CardWrapper
                    firstText={'Photo'}
                    secondText={'Categories'}
                    className={'card-categories'}>
                    <div className={'card-categories__container'}>
                        <p className={'card-categories__container__label'}>
                            This ship exists in the following photo categories:
                        </p>
                        <p className={'card-categories__container__value'}>
                            <span>Casualties</span> - 3 photos
                        </p>
                        <p className={'card-categories__container__value'}>
                            <span>Shipping</span>  - 1 photos
                        </p>
                        <p className={'card-categories__container__value'}>
                            <span>Chemical and Product Tankers</span> - 111 photos
                        </p>
                    </div>
                </CardWrapper>
                <CardWrapper
                    firstText={'Technical'}
                    secondText={'Data'}
                    className={'card-data'}>
                    <div className={'card-categories__container'}>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Gross tonnage: </span>
                            <span>7.386 tons</span>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Summer DWT: </span>
                            <span>9,438 tons</span>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Length: </span>
                            <span>129 m</span>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Beam: </span>
                            <span>19 m</span>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Draught: </span>
                            <span>7.3 m</span>
                        </div>
                    </div>
                </CardWrapper>
            </div>
            <div className={'card-controls__actions'}>
                <span className={'card-controls__actions__picture'}>Full Screen</span>
                <span className={'card-controls__actions__edit'}>Edit info</span>
                <span className={'card-controls__actions__comment'}>Add Comment</span>
                <span className={'card-controls__actions__favorite'}>Add to favorites</span>
                <span className={'card-controls__actions__like'}>Like</span>
            </div>
            <p className={'card-controls__thumbnails'}>
                Get thumbnail code to post in forum, blog or homepage
            </p>
            <div className={'card-controls__footer'}>
                <p>Ship information by <span>AirNav ShipTrax</span> and <span>GrossTonnage.com.</span></p>
                <Button
                    variant={'secondary'}
                    className={'card-controls__footer__button'}>
                    Report error in ship details
                </Button>
            </div>
        </div>
    )
};

export default CardControls;

