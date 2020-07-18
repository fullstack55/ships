import React from "react";
import './summery-photo.sass';
import PageTitle from "../../../../components/common/page-title/page-title";
import tweet from '../../../../assets/images/desktop/photos/Tweet _ share.svg';
import ShipInWaves from '../../../../assets/images/desktop/photos/shipInWawes.svg';
import like from '../../../../assets/images/desktop/like.png'
import CardWrapper from "./card-wrapper/card-wrapper";
import flag from '../../../../assets/images/desktop/photos/Flag.svg';
import CardControls from "./card-controls/card-controls";
import MapCard from "./map-card/map-card";
import PhotographersCard from "./photographers-card/photographers-card";

const SummeryPhoto = () => {
    return (
        <div className={'summery-photo'}>
            <PageTitle
                main={'Blue star '}
                secondary={'- Imo 9527764'}
                className={'summery-photo__title'}
            />
            <img src={tweet} alt="tweet"/>
            <div className={'summery-photo__image-row'}>
                <div className={'summery-photo__image-row__image'}>
                    <img src={ShipInWaves} alt="Ship"/>
                    <div className={'summery-photo__image-row__image__like-container'}>
                        <img src={like} alt="like"/>
                        <span>10</span>
                    </div>
                </div>
                <CardWrapper firstText={'General'} secondText={'information'} className={'summery-photo__image-row__card'}>
                    <div className={'summery-photo__card-general'}>
                        <div className={'summery-photo__card-general__flag'}>
                            <img src={flag} alt="flag"/>
                            <p>Malta (this is a place for long-logn name)</p>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Current name: </span>
                            <span>BLUE STAR</span>
                        </div>
                        <div className={'summery-photo__card-general__desc'}>
                            <p className={'summery-photo__card-general__desc__label'}>
                                Former name(s):
                            </p>
                            <p className={'summery-photo__card-general__text'}><span>-</span> Ekologia <span>(Until 2010 May)</span></p>
                            <p className={'summery-photo__card-general__text'}><span>-</span> Ekologia <span>(Until 2003 Dec)</span></p>
                            <p className={'summery-photo__card-general__text'}><span>-</span> Pyalista <span>(Until 1997 Jan)</span></p>

                        </div>
                        <div className={'summery-photo__card-general__margin-bottom'}>
                            <div className={'summery-photo__card-general__label'}>
                                <span>Vessel Type: </span>
                                <span>OIL/CHEMICAL TANKER</span>
                            </div>
                            <div className={'summery-photo__card-general__label'}>
                                <span>Class society: </span>
                                <span>Det Norske Veritas</span>
                            </div>
                            <div className={'summery-photo__card-general__label'}>
                                <span>Callsign: </span>
                                <span>9HA2785</span>
                            </div>
                            <div className={'summery-photo__card-general__label'}>
                                <span>IMO: </span>
                                <span>9527764</span>
                            </div>
                            <div className={'summery-photo__card-general__label'}>
                                <span>MMSI: </span>
                                <span>215691000</span>
                            </div>
                            <div className={'summery-photo__card-general__label'}>
                                <span>Build year: </span>
                                <span>2011</span>
                            </div>
                        </div>
                        <div className={'summery-photo__card-general__margin-bottom'}>
                            <div className={'summery-photo__card-general__label'}>
                                <span>Current flag: </span>
                                <span>MALTA</span>
                            </div>
                            <div className={'summery-photo__card-general__label'}>
                                <span>Home port: </span>
                                <span>VALLETTA</span>
                            </div>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Photos: </span>
                            <span>115 photos by 36 photographers</span>
                        </div>
                    </div>
                </CardWrapper>


                <CardWrapper firstText={'Photo'} secondText={'detains'} className={'summery-photo__image-row__card'}>
                    <div className={'summery-photo__card-photo'}>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Photographer: </span>
                            <span>José Ricardo Rodriguez Montero</span>
                        </div>
                        <p className={'summery-photo__card-photo'}><span>[ </span>View profile <span>]</span></p>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Captured: </span>
                            <span>Feb 11, 2020</span>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Title: </span>
                            <span>Blue Star</span>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Location: </span>
                            <span className={'summery-photo__card-general__label__link'}>Southampton, United Kingdom</span>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Photo Category: </span>
                            <span>Containerships built 2011-2020</span>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Added: </span>
                            <span>February 11, 2020</span>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Hits: </span>
                            <span>3,064</span>
                        </div>
                        <div className={'summery-photo__card-general__label'}>
                            <span>Total hits: </span>
                            <span>36,927</span>
                        </div>
                        <p className={'summery-photo__card-photo__desc-label'}>Description:</p>
                        <div className={'summery-photo__card-photo__desc-container'}>
                            <p>Vessel ran aground due to engine failure due to fire. Vessel was
                                proceeding from Ares bay (anchorage place of Ferrol and A Coruña)
                                to Repsol Terminal in ballast to load 6000 tons of chemical products.
                                Two tugs, Don Inda and Ibaizabal Nueve are trying to reflotad with high
                                tide but towing lines had broken 4 times. Both tugs will try again
                                during next high tide tonight.</p>
                        </div>

                    </div>
                </CardWrapper>
                <CardControls />
                <MapCard />
                <PhotographersCard />
            </div>
        </div>
    )
};

export default SummeryPhoto;
