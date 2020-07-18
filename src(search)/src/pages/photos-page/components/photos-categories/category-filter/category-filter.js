import React from "react";
import './category-filter.sass';
import steeringWheel from '../../../../../assets/images/desktop/photos/steeringWheelWhite.svg'
import Select from "../../../../../components/common/select/select";

const CategoryFilter = () => {
    return (
        <div className={'category-filter'}>
            <img src={steeringWheel} alt="steering wheel"/>
            <p className={'category-filter__subtitle'}>Quick photo access</p>
            <p className={'category-filter__title'}><span>Category</span> Quicklist</p>
            <Select options={[{label:'Accommodation Vessels & Barge',value : '1'}]} />
        </div>
    )
};

export default CategoryFilter
