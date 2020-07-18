import React , {useState} from "react";
import './label.sass'
import Checkbox from "../../../../../components/common/checkbox/checkbox";
import Paper from "../../../../../components/common/paper/paper";
import PropTypes from "prop-types";


const Label = ({title}) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggle = () => {
        setIsChecked(!isChecked)
    };

    return (
        <Paper  className={isChecked ? 'checked-label label' : 'label'}>
            <Checkbox className={'label__checkbox'} onChange={toggle} checked={isChecked} label={title} />
        </Paper>
    )
};

Label.propTypes = {
    title: PropTypes.string,
};

export default Label
