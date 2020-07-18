import React from "react";
import './manage-labels.sass';
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import InputField from "../../../../components/common/input-field/input-field";
import Button from "../../../../components/common/button/button";
import Label from "./label/label";
import Checkbox from "../../../../components/common/checkbox/checkbox";

const ManageLabels = () => {
    return (
        <div className={'manage-labels'}>
            <Typography firstText={'Manage'} secondText={'Labels'} />
            <Paper className={'manage-labels__paper'}>
                <Typography firstText="Add" secondText="New Labels" before />
                <div className={'manage-labels__paper__create-label-container'}>
                    <InputField className={'manage-labels__paper__create-label-container__input'} label={'Label Name:'} />
                    <Button
                        className={'manage-labels__paper__create-label-container__button'}
                        variant={'secondary'}>
                        Add New Label
                    </Button>
                </div>
            </Paper>
            <Paper className={'manage-labels__paper'}>
                <Typography firstText="My" secondText="Labels" before />
                <div className={'manage-labels__paper__label-container'}>
                    <Label title={'test'} />
                    <Label title={'design test 1'} />
                    <Label title={'test text'} />
                    <Label title={'Long-long text-really long of my label'} />
                    <Label title={'short label'} />
                    <Label title={'another text'} />
                </div>
                <Checkbox className={'manage-labels__paper__checkbox'} label={'check all'} />
                <div className={'manage-labels__paper__button-container'}>
                    <Button>Save</Button>
                    <Button className={'outbox__paper__button'} variant={'secondary'}>Delete Selected</Button>
                </div>
            </Paper>

        </div>
    )
};

export default ManageLabels;
