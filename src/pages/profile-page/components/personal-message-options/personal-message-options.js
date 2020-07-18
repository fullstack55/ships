import React from "react";
import './personal-message-options.sass'
import Typography from "../../../../components/common/typography/typography";
import InfoNote from "../../../../components/common/info-note/info-note";
import Paper from "../../../../components/common/paper/paper";
import TextArea from "../../../../components/common/text-area/text-area";
import Checkbox from "../../../../components/common/checkbox/checkbox";
import Button from "../../../../components/common/button/button";
import Select from "../../../../components/common/select/select";

const PersonalMessageOptions = () => {
    return (
        <div className={'message-options'}>
            <Typography className={'account-settings__title'} firstText={'Personal Message'} secondText={'Options'} />
            <InfoNote text={'Other members of ShipSpotting.com Forum can contact you personally, but sometimes ' +
            'you may want to ignore someone\'s messages. This page allows you to set that, among other things.'} />
            <Paper className={'message-options__paper'}>
                <div>
                    <p className={'message-options__paper__label'}>Username:</p>
                    <span className={'message-options__paper__sub-label'}>Add one Username on each line. Or enter * to ignore all messages.</span>
                </div>
                <p className={'message-options__paper__find-members'}>[Find Members]</p>
                <TextArea />
                <Checkbox label={'Save a copy of each Personal Message in my outbox by default.'} />
                <Checkbox label={'Show a popup when you receive new messages?'} />
                <p className={'message-options__paper__label2'}>Notify by email every time you receive a personal message:</p>
                <div className={'message-options__paper__select-container'}>
                    <Select options={[{label:'Always', value: 'Always'}]} />
                </div>
                <Button className={'message-options__paper__button'} variant={"secondary"}>
                    Change Profile
                </Button>
            </Paper>
        </div>
    )
};

export default PersonalMessageOptions;
