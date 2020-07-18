import React from "react";
import './font-styles.sass';
import Bold from '../../../../../assets/images/desktop/messages/font-styles/boldIcon.svg';
import italic from '../../../../../assets/images/desktop/messages/font-styles/italicIcon.svg';
import underline from '../../../../../assets/images/desktop/messages/font-styles/underlineIcon.svg';
import crossed from '../../../../../assets/images/desktop/messages/font-styles/crossedIcon.svg';
import greenGIcon from '../../../../../assets/images/desktop/messages/font-styles/greenGIcon.svg';
import ShadowIcon from '../../../../../assets/images/desktop/messages/font-styles/ShadowIcon.svg';
import marginIcon from '../../../../../assets/images/desktop/messages/font-styles/marginIcon.svg';
import normalAlign from '../../../../../assets/images/desktop/messages/font-styles/normalAlign.svg';
import leftAlign from '../../../../../assets/images/desktop/messages/font-styles/leftAlign.svg';
import centerAlign from '../../../../../assets/images/desktop/messages/font-styles/centerAlign.svg';
import rightAlign from '../../../../../assets/images/desktop/messages/font-styles/rightAlign.svg';
import textSpacing from '../../../../../assets/images/desktop/messages/font-styles/textSpacing.svg';
import vertiacalSpacing from '../../../../../assets/images/desktop/messages/font-styles/vertiacalSpacing.svg';
import redA from '../../../../../assets/images/desktop/messages/font-styles/redA.svg';
import Circle from '../../../../../assets/images/desktop/messages/font-styles/Circle.svg';
import picture from '../../../../../assets/images/desktop/messages/font-styles/picture.svg';
import worldIcon from '../../../../../assets/images/desktop/messages/font-styles/worldIcon.svg';
import reSend from '../../../../../assets/images/desktop/messages/font-styles/reSend.svg';
import network from '../../../../../assets/images/desktop/messages/font-styles/network.svg';
import grid from '../../../../../assets/images/desktop/messages/font-styles/grid.svg';
import gridTopLayer from '../../../../../assets/images/desktop/messages/font-styles/gridTopLayer.svg';
import grid1Item from '../../../../../assets/images/desktop/messages/font-styles/grid1Item.svg';
import sup from '../../../../../assets/images/desktop/messages/font-styles/sup.svg';
import writingMachine from '../../../../../assets/images/desktop/messages/font-styles/writingMachine.svg';
import hashTag from '../../../../../assets/images/desktop/messages/font-styles/hashTag.svg';
import quote from '../../../../../assets/images/desktop/messages/font-styles/quote.svg';
import bulletPoints from '../../../../../assets/images/desktop/messages/font-styles/bulletPoints.svg';
import FontBox from "./font-box/font-box";

const FontStyles = () => {
    return (
        <div className={'font-styles'}>
            <FontBox img={Bold} />
            <FontBox img={italic} />
            <FontBox img={underline} />
            <FontBox img={crossed} />
            <FontBox img={greenGIcon} />
            <FontBox img={ShadowIcon} />
            <FontBox img={marginIcon} />
            <FontBox img={normalAlign} />
            <FontBox img={leftAlign} />
            <FontBox img={centerAlign} />
            <FontBox img={rightAlign} />
            <FontBox img={textSpacing} />
            <FontBox img={vertiacalSpacing} />
            <FontBox img={redA} />
            <FontBox img={Circle} />
            <FontBox img={picture} />
            <FontBox img={worldIcon} />
            <FontBox img={reSend} />
            <FontBox img={network} />
            <FontBox img={grid} />
            <FontBox img={gridTopLayer} />
            <FontBox img={grid1Item} />
            <FontBox img={sup} />
            <FontBox img={writingMachine} />
            <FontBox img={hashTag} />
            <FontBox img={quote} />
            <FontBox img={bulletPoints} />
        </div>
    )
};

export default FontStyles;
