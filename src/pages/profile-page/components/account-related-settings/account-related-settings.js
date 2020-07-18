import React from "react";
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import InputField from "../../../../components/common/input-field/input-field";
import Checkbox from "../../../../components/common/checkbox/checkbox";
import Button from "../../../../components/common/button/button";
import './account-related-settings.sass'
import InfoNote from "../../../../components/common/info-note/info-note";


const AccountRelatedSetting = () => {
    return (
        <div className={'account-settings'}>
            <Typography className={'account-settings__title'} firstText={'Account Related'} secondText={'Settings'} />
            <InfoNote text={'These are your account settings. This page holds all critical information that identifies ' +
                'you on this forum. For security reasons, you will need to enter your (current) ' +
                'password to make changes to this information.'} />

            <Paper className={'account-settings__paper'}>
                <Typography firstText="My" secondText="Profile" before />
                <p className={'account-settings__paper__label'}>Username:</p>
                <h2 className={'account-settings__paper__username'}>José Ricardo Rodriguez Montero</h2>
                <div className={'account-settings__paper__form'}>
                    <div className={'account-settings__paper__form__row'}>
                        <div>
                            <InputField label={'Name:'} />
                            <p>This is the displayed name that people will see.</p>
                        </div>
                        <div>
                            <InputField label={'Email:'} />
                            <p>This must be a valid email address.</p>
                            <Checkbox
                                label={'Hide email address from public'}
                            />
                        </div>
                    </div>
                    <div className={'account-settings__paper__form__row'}>
                        <div>
                            <InputField label={'Choose password:'} />
                            <p>For best security, you should use six or more characters with a combination
                                of letters, numbers, and symbols.</p>
                        </div>
                        <div>
                            <InputField label={'Verify password:'} />
                        </div>
                    </div>
                    <div className={'account-settings__paper__form__row'}>
                        <div>
                            <InputField label={'Secret Question:'} />
                            <p>To help retrieve your password, enter a question here with an answer that only
                                you know.</p>
                        </div>
                        <div>
                            <InputField label={'Answer:'} />
                            <p>Choose carefully, you wouldn&apos;t want someone guessing your answer! <br/>
                            <span> [why is this blank?]</span>
                            </p>
                        </div>
                    </div>
                    <div className={'account-settings__paper__form__row'}>
                        <div>
                            <InputField label={'Current Password:'} />
                            <p>For security reasons, your current password is required to make changes to
                                your account.</p>
                        </div>
                    </div>
                    <Button className={'account-settings__paper__form__button'} variant={"secondary"}>
                        Change Profile
                    </Button>

                </div>
            </Paper>
        </div>
    )
};

export default AccountRelatedSetting;
