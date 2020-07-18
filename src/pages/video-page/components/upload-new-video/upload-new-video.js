import React, {useState} from "react";
import './upload-new-video.sass'
import Typography from "../../../../components/common/typography/typography";
import InputField from "../../../../components/common/input-field/input-field";
import Paper from "../../../../components/common/paper/paper";
import TextArea from "../../../../components/common/text-area/text-area";
import Checkbox from "../../../../components/common/checkbox/checkbox";
import Button from "../../../../components/common/button/button";


const UploadNewVideo = () => {
    const [checked, setChecked] = useState(false);

    const toggle = () => {
        setChecked(!checked);
    };

    return(
        <div className={'video-upload'}>
            <Typography firstText={'Upload'} secondText={'new video'}/>
            <Paper className={'video-upload__paper'}>
                <p>Let`s start!</p>
                <InputField label={'Video title:'} placeholder={'Select'} />
                <div className={'video-upload__paper__flex'}>
                    <div>
                        <InputField label={'Youtube code:'} placeholder={'Your text'}/>
                        <span>The share link of the video, the URL or the code itself will work.</span>
                    </div>
                    <div>
                        <InputField label={'IMO Numbers:'} placeholder={'Your text'}/>
                        <span>List of IMO&apos;s visible in this video.
                            Comma separated. Example: 1234567, 2345678, 3456789</span>
                    </div>
                </div>
                <TextArea className={'video-upload__paper__textArea'} label={'Description:'} placeholder={'Select'} />
                <div className={'video-upload__paper__checkbox-container'}>
                    <Checkbox checked={checked} onChange={toggle} />
                    <p>I accept the <span>Terms and Conditions</span></p>
                </div>
                <Button className={'video-upload__paper__button'} variant={'secondary'}>Upload video</Button>
            </Paper>
            <div className={'video-upload__info'}>Videos should comply with the basics of our site standards for photos.
                Mainly: You must own the rights to the video yourself, and video content must be relevant for the
                site.</div>
        </div>
    )
};

export default UploadNewVideo
