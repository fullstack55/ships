import React from "react";
import './photos-categories.sass';
import PageTitle from "../../../../components/common/page-title/page-title";
import SearchField from "../../../../components/common/search-field/search-field";
import CategoryFilter from "./category-filter/category-filter";
import CategoryImage from "./category-image/category-image";
import aircraftCarrier from '../../../../assets/images/desktop/photos/Aircraft_Carrier.jpg'

const PhotosCategories = () => {
    return (
        <div className={'photos-categories'}>
            <PageTitle main={'Photo'} secondary={'index'} className={'photos-categories__title'} />
            <SearchField label={'Search by word:'} placeholder={'Accommodation'} />
            <div className={'photos-categories__images-container'}>
                <CategoryFilter />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
                <CategoryImage title={'Aircraft Carriers'} src={aircraftCarrier} />
            </div>

        </div>
    )
};

export default PhotosCategories;
