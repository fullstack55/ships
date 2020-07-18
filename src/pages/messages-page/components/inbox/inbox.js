import React from "react";

import './inbox.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import InboxRow from "./inbox-row/inbox-row";
import Button from "../../../../components/common/button/button";
import Pagintation from "../../../profile-page/components/posts/pagination/pagination";
import OutboxCard from "../outbox/outbox-card/outbox-card";

const Inbox = () => {
    return (
        <div className={'inbox'}>
            <Typography firstText={'Inbox'} secondText={'Messages'} />
            <Paper className={'inbox__paper'}>
                <div className={'inbox__paper__header'}>
                    <Typography firstText="Inbox" secondText="list" before />
                    <div className={'inbox__paper__header__right-section'}>
                        <p>Label Selectd: </p>
                        <div className={'inbox__paper__header__right-section__drop-down'}>
                            <p>Long label text for website redesign </p>
                            <span />
                        </div>
                    </div>
                </div>
                <div className={'inbox__paper__grid'}>
                    <InboxRow heading from='-' date={'-'} subject={'-'}/>
                    <InboxRow
                        from='José Ricardo Rodriguez Montero'
                        date={'Feb 13 2020 (6 days ago)'}
                        subject={'(No subject)'}
                    />
                    <InboxRow
                        from='José Ricardo Rodriguez Montero'
                        date={'Feb 13 2020 (6 days ago)'}
                        subject={'don\'t worry about this'}
                    />
                    <InboxRow
                        from='José Ricardo Rodriguez Montero'
                        date={'Feb 13 2020 (6 days ago)'}
                        subject={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}
                    />
                    <InboxRow
                        from='José Ricardo Rodriguez Montero'
                        date={'Feb 13 2020 (6 days ago)'}
                        subject={'(No subject)'}
                    />

                </div>
                <div className={'inbox__paper__footer'}>
                    <Button className={'outbox__paper__button'} variant={'secondary'}>Delete Selected</Button>
                    <Pagintation totalPages={3211} />
                </div>
            </Paper>
            <OutboxCard
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
                'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
                'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in... voluptate'}
                heading={'build'}
                subject={'my design test for email'}
                timeSent={'February 20, 2020, 04:41:47 pm'}
                to={'Eugen Gorlov'}
                actions={4}
                leftActions={true}
            />
            <OutboxCard
                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
                'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
                'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
                'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in... voluptate'}
                heading={'build'}
                subject={'my design test for email'}
                timeSent={'February 20, 2020, 04:41:47 pm'}
                to={'Eugen Gorlov'}
                actions={4}
                leftActions={true}
            />
            <div className={'inbox__footer'}>
                <Button className={'outbox__paper__button'} variant={'secondary'}>Delete Selected</Button>
                <Pagintation totalPages={3211} />
            </div>
        </div>
    )
};

export default Inbox
