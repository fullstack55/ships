import React from "react";

import './settings.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import Button from "../../../../components/common/button/button";
import Checkbox from "../../../../components/common/checkbox/checkbox";

const Settings = () => {
  return (
    <div className={'settings'}>
      <Typography firstText={'Photo'} secondText={'settings'}/>
      <Paper className={'settings__paper'}>

        <Typography firstText="Thumbnails" secondText="settings" before/>

        <div>
          <p className={'info'}>
           To promote your photos and the website, we allow our shipspotting.com photo thumbnails (210x165 pixels) to be shown on other sites such as
            maritime websites, social media (example: Facebook, Twitter), home pages and blogs.
          </p>
          <p className={'info'}>
            When such a thumbnail is shown outside our site:<br/>
            - Clicking the thumbnail takes the viewer to the photo page with the original larger photo on shipspotting.com.<br/>
            - The photographer is always credited with a copyright mark
          </p>
          <p className={'info'}>
            We might limit larger websites from showing photos by charging a small fee. This fee will cover the extra costs for serving thumbnails externally, and also help out with financing the shipspotting.com servers.
            If you do not want your photo thumbnails (210x165 pixels) to be shown on other sites, check this box:
          </p>
        </div>


        <Checkbox
          checked={true}
          name={'exclude'}
          label='Exclude all my current and future photos from being displayed externally'
        />
        <Button
          onClick={() => {
          }}
          variant={'secondary'}
          className={'settings__paper__button'}
        >
          Change
        </Button>
      </Paper>
    </div>
  )
};

export default Settings
