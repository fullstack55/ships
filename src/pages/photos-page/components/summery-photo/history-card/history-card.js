import React from "react";
import './history-card.sass';
import CardWrapper from "../card-wrapper/card-wrapper";

const HistoryCard = () => {
    return (
        <CardWrapper firstText={'Port'} secondText={'history'} className={'history-card'}>
            <div>
                <div>
                    <p>2018 September 18th, 01:00:09 UTC</p>
                    <p>2018 September 8th, 05:00:05 UTC</p>
                    <p>2018 August 30th, 13:00:01 UTC</p>
                    <p>2018 August 23rd, 02:20:46 UTC</p>
                    <p>2018 August 16th, 03:00:58 UTC</p>
                </div>
                <div>
                    <p>Cardiff Uk</p>
                    <p>Barcelona</p>
                    <p>Antwerp</p>
                    <p>Barcelona</p>
                    <p>Bilbao</p>
                </div>
                <div>
                    <p>2018 August 12th, 05:00:46 UTC</p>
                    <p>2018 August 12th, 05:00:46 UTC</p>
                    <p>2018 August 3rd, 22:00:50 UTC</p>
                    <p></p>
                    <p></p>
                </div>
                <div></div>
            </div>
            <div></div>
        </CardWrapper>
    )
};

export default HistoryCard;
