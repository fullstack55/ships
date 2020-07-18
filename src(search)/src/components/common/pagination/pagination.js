/* eslint-disable react/prop-types */
import React from 'react';
import { createUltimatePagination } from 'react-ultimate-pagination';
import classnames from 'classnames';
import './pagination.sass';

const Button = ({ children, className, ...props }) => (
  <button
    { ...props}
    className={ classnames('pagination-react-button', className) }
  >
    {children }
  </button>
)

const Page = ({ isActive, onClick, disabled, value }) => {
  return (
    <Button
      className={ classnames({ 'active': isActive }) }
      onClick={ onClick }
      disabled={ disabled }
    >
      { value }
    </Button>
  );
}

const Ellipsis = (props) => {
  return <Button className="ellipsis" onClick={props.onClick} disabled={props.disabled}>...</Button>
}

const FirstPageLink = (props) => {
  return <Button className="first" onClick={props.onClick} disabled={props.disabled}>&#171;</Button>
}

const PreviousPageLink = (props) => {
  return <Button className="previous" onClick={props.onClick} disabled={props.disabled}>&#8249;</Button>
}

const NextPageLink = (props) => {
  return <Button className="next" onClick={props.onClick} disabled={props.disabled}>&#8250;</Button>
}

const LastPageLink = (props) => {
  return <Button className="last" onClick={props.onClick} disabled={props.disabled}>&#187;</Button>
}

const WrapperComponent = (props) => {
  return <div className="pagination-react">{props.children}</div>
}

const itemTypeToComponent = {
  'PAGE': Page,
  'ELLIPSIS': Ellipsis,
  'FIRST_PAGE_LINK': FirstPageLink,
  'PREVIOUS_PAGE_LINK': PreviousPageLink,
  'NEXT_PAGE_LINK': NextPageLink,
  'LAST_PAGE_LINK': LastPageLink
};

const Pagination = createUltimatePagination({
  itemTypeToComponent,
  WrapperComponent,
});

const ConfiguredPagination = ({ ...props }) => (
  <>
    <Pagination
      siblingPagesRange={ 3 }
      { ...props }
    />
    <div className="pagination-react-hint">
      Hint: The left/right arrows on your keyboard will take you to the previous/next page.
    </div>
  </>
)

export default ConfiguredPagination;