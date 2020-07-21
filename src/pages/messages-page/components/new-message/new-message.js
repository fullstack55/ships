import React from "react";
import './new-message.sass';
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import InputField from "../../../../components/common/input-field/input-field";
import verification from '../../../../assets/images/desktop/messages/verificationCodeIcon.svg'
import Select from "../../../../components/common/select/select";
import FontStyles from "./font-styles/font-styles";
import Smiles from '../../../../assets/images/desktop/messages/smiles.svg'
import TextArea from "../../../../components/common/text-area/text-area";
import Button from "../../../../components/common/button/button";
import Checkbox from "../../../../components/common/checkbox/checkbox";

const NewMessage = () => {
    return (
        <div className={'new-message'}>
            <Typography firstText={'New'} secondText={'Message'} />
            <Paper className={'new-message__paper'}>
                <div className={'new-message__paper__input-container'}>
                    <div className={'new-message__paper__input-container__left-container'}>
                        <InputField className={'new-message__paper__input-container__left-container__input'}
                                    label={'To:'} />
                        <p className={'message-options__paper__find-members'}>[Find Members]</p>
                    </div>
                    <div className={'new-message__paper__input-container__right-container'}>
                        <InputField className={'new-message__paper__input-container__right-container__input'}
                                    label={'Bcc:'} />
                        <p>{'(multiple recipients: \'name1, name2\')'}</p>
                    </div>
                </div>
                <InputField className={'new-message__paper__subject-input'}
                            label={'Subject:'} />
                <div className={'new-message__paper__verification-container'}>
                    <div className={'new-message__paper__verification-container__left-part'}>
                        <p className={'new-message__paper__verification-container__left-part__label'}>Verification:</p>
                        <div>
                            <img src={verification} alt="verification code"/>
                        </div>
                        <p className={'new-message__paper__verification-container__left-part__listen'}>
                            Listen to the letters</p>
                    </div>
                    <div className={'new-message__paper__verification-container__right-part'}>
                        <InputField />
                        <p>please enter the code in the image above to send this pm.</p>
                    </div>
                </div>
                {/* <div className={'new-message__paper__styles-container'}> */}
                    <Select options={[{value:'Change color', label:'Change color'}]} />
                    <div className={'new-message__paper__styles-container__styles'}>
                        <FontStyles />
                    </div>
                {/* </div> */}
                <img className={'new-message__paper__smiles'} src={Smiles} alt="smiles"/>
                <TextArea />
                <div className={'new-message__paper__button-container'}>
                    <Button className={'new-message__paper__button-container__button1'}>Send message</Button>
                    <Button className={'new-message__paper__button-container__button2'}
                            variant={'secondary'}>preview</Button>
                </div>
                <Checkbox className={'new-message__paper__checkbox'} label={'Save a copy in my outbox'} />
            </Paper>
        </div>
    )
};

export default NewMessage;
