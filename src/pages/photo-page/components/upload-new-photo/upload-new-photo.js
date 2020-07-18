import React from "react";

import './upload-new-photo.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import Button from "../../../../components/common/button/button";
import UploadField from "../../../../components/common/upload-field/upload-field";
import InputField from "../../../../components/common/input-field/input-field";
import Checkbox from "../../../../components/common/checkbox/checkbox";
import Select from "../../../../components/common/select/select";
import TextArea from "../../../../components/common/text-area/text-area";

import calendarIcon from '../../../../assets/images/desktop/photo/calendarIcon.svg'

const UploadNewPhoto = () => {
  return (
    <div className={'new-upload'}>
      <Typography firstText={'Upload'} secondText={'new photo'}/>
      <Paper className={'new-upload__paper'}>
        <p>Let`s start!</p>
        <div className={'new-upload__paper__center-container'}>
          <div>
            <UploadField
              name='uploadFile'
              label='Select file'
              underLabel='Photo file:'
              value='merlin_16...Jumbo.jpg'
              onChange={() => {
              }}
            />
            <div className={'new-upload__paper__center-container__with-fields'}>
              <InputField label='Ship name:'/>
              <div className={'select-item'}>
                <p>Category:</p>
                <Select options={[{value: 'Category', label: 'Category'}]}/>
              </div>
              <InputField label='IMO number:'/>
              <Checkbox checked={true} name={'irrelevant'} label='Irrelevant'/>
            </div>
          </div>
          <div className={'new-upload__paper__center-container__right-block'}>
            <InputField
              label='Pennant Number:'
              hint={'Military vessels only. Add without spaces, for example D36 or FFG40'}
            />
            <InputField
              label='ENI Number:'
              hint={'European Number of Identification. 8 digits. For European inland vessels only!'}
            />
            <div className={'select-item'}>
              <p>Location:</p>
              <Select options={[{value: 'Location', label: 'Location'}]}/>
            </div>
            <Checkbox checked={false} name={'unknown'} label='Unknown'/>
            <p className={'new-upload__paper__center-container__right-block__paragraph'}>
              If typed entry causes No ports found! check Unknown and make sure the location
              details are shown in the description
              <span>[Read more]</span>
            </p>
            <div className={'date-block'}>
              <img src={calendarIcon} alt="calendar"/>
              <InputField label='Date of photo:'/>
            </div>
            <Checkbox checked={true} name={'secondUnknown'} label='Unknown'/>
            <p className={'new-upload__paper__center-container__right-block__paragraph'}>
              If the day of the month is not known use the first day of the month. If the month of the
              year is not known use the first day of the year.
            </p>
          </div>
        </div>
        <div className={'new-upload__paper__bottom-container'}>
          <TextArea label='Description:'/>
          <Checkbox
            checked={true}
            name={'secondUnknown'}
            label='I accept  the Terms and Conditions and I am aware of the Site Standards for all photos and Category Standards.'
          />
          <Button
            onClick={() => {
            }}
            variant={'secondary'}
            className={'new-upload__paper__bottom-container__new-upload__button'}
          >
            Upload photo
          </Button>
        </div>
      </Paper>
      <footer className={'footer-text'}>
        <p>
          Shipspotting.com is an international website with volunteer administrators (Admins) from many countries
          across the world. They review all photos submitted, checking for compliance with site standards.
          Site standards are determined with criteria that can be met by members with a wide range of experience,
          camera gear and shipspotting locations. Site standards provide an important element of consistent quality
          control for the site which is frequently reviewed
        </p>
      </footer>
    </div>
  )
};

export default UploadNewPhoto
