import React from "react";
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import Button from "../../../../components/common/button/button";

import './prune.sass';


const Prune = () => {
  return (
    <div className={'prune'}>
      <Typography firstText={'Prune'} secondText={'Messages'} />
      <Paper className={'prune__paper'}>
        <p className={'prune__paper_inbox-title'}>Delete all personal messages older than</p>
        <div className={'prune__paper_inbox-container'}>
          <span>999</span>
          <span>days</span>
        </div>
        <Button className={'prune__paper__button'} variant={'secondary'}>Save Settings</Button>
      </Paper>
    </div>
  )
}

export default Prune