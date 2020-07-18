import React from "react";
import './map-card.sass';
//import map from '../../../../../assets/images/desktop/photos/cardMap.svg';
import Typography from "../../../../../components/common/typography/typography";

const MapCard = () => {
    return (
        <div className={'map-card'}>
            <div className={'map-card__left-container'}>
                <div className={'map-card__left-container__header'}>
                    <Typography
                        firstText={'AIS Position'} secondText={'of this ship'}
                        before className={'card-wrapper__header__typography'} />
                </div>
                <div className={'map-card__left-container__body'}>
                    <div className={'summery-photo__card-general__label'}>
                        <span>Last known position: </span>
                        <span>44°4’57.2” N, 3°34’7.57” W</span>
                    </div>
                    <div className={'summery-photo__card-general__label'}>
                        <span>Status: </span>
                        <span>Underway</span>
                    </div>
                    <div className={'summery-photo__card-general__label'}>
                        <span>Speed, course (heading): </span>
                        <span>12.4kts, 334° (333°)</span>
                    </div>
                    <div className={'summery-photo__card-general__label'}>
                        <span>Destination: </span>
                        <span/>
                    </div>
                    <div className={'summery-photo__card-general__label'}>
                        <span>Location: </span>
                        <span>Bilbao</span>
                    </div>
                    <div className={'summery-photo__card-general__label'}>
                        <span>Arrival: </span>
                        <span>11th Nov 2019 / 15:00:14 UTC</span>
                    </div>
                    <div className={'summery-photo__card-general__label'}>
                        <span>Last update: </span>
                        <span>2 months 26 days ago</span>
                    </div>
                    <div className={'summery-photo__card-general__label'}>
                        <span>Source: </span>
                        <span>AIS (AirNav ShipTrax)</span>
                    </div>
                    <p className={'map-card__left-container__body__cta'}>Click to open AIS map</p>
                </div>
            </div>
            <div className={'map-card__map'} />
        </div>
    )
};

export default MapCard;
// Last known position: 44°4’57.2” N, 3°34’7.57” W
// Status: Underway
// Speed, course (heading): 12.4kts, 334° (333°)
// Destination:
//     Location: Bilbao
// Arrival: 11th Nov 2019 / 15:00:14 UTC
// Last update: 2 months 26 days ago
// Source: AIS (AirNav ShipTrax)
//
// Click to open AIS map

