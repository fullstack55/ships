import React from "react";
import PropTypes from "prop-types";
import './advance-pagination.sass'

import leftArrow from '../../../assets/images/desktop/most-popular/leftArrow.svg'
import leftArrows from '../../../assets/images/desktop/most-popular/leftArrows.svg'
import rightArrow from '../../../assets/images/desktop/most-popular/rightArrow.svg'
import rightArrows from '../../../assets/images/desktop/most-popular/rightArrows.svg'

const AdvancePagination = ({totalPages}) => {
  return (
    <div className={'pagination'}>
      <img src={leftArrows} alt="arrow"/>
      <img className={'left-arrow'} src={leftArrow} alt="arrow"/>
      <span>1</span>
      <span className={'pagination__selected'}>2</span>
      <span>3</span>
      <span className={'pagination__hidden1'}>4</span>
      <span className={'pagination__hidden1'}>5</span>
      <span className={'pagination__hidden2'}>6</span>
      <span className={'pagination__hidden2'}>7</span>
      <span className={'pagination__hidden2'}>8</span>
      <span className={'pagination__hidden2'}>9</span>
      <span className={'pagination__hidden2'}>10</span>
      ...
      <span className={'pagination__hidden1'}>{totalPages}</span>
      <img className={'right-arrow'} src={rightArrow} alt="arrow"/>
      <img src={rightArrows} alt="arrow"/>
    </div>
  )
};

AdvancePagination.propTypes = {
  totalPages: PropTypes.number,
};
export default AdvancePagination
