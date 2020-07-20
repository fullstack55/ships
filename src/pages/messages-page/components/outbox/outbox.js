import React from "react";
import './outbox.sass'
import Typography from "../../../../components/common/typography/typography";
import Paper from "../../../../components/common/paper/paper";
import Checkbox from "../../../../components/common/checkbox/checkbox";
import Button from "../../../../components/common/button/button";
import OutboxCard from "./outbox-card/outbox-card";
import { useMediaQuery } from "react-responsive";
import InboxTable from "../inbox/component/inbox-table";

const Outbox = () => {
    const isMobile = useMediaQuery({ maxWidth: 960 });
    return (
        <div className={'outbox'}>
            <Typography firstText={'Outbox'} secondText={'Messages'} />
            <Paper className={'outbox__paper'}>
                <Typography firstText="Inbox" secondText="list" before />
                <div className={'outbox__paper__inbox-container'}>
                    {!isMobile ? (
                        <>
                            <div className={'outbox__paper__inbox-container__left-container'}>
                                <div className={'outbox__paper__inbox-container__left-container__checkbox-container'}>
                                    <div className={'outbox__paper__inbox-container__left-container__checkbox-container__checkbox1'}>
                                        <Checkbox />
                                        <p className={'outbox__paper_inbox-title'}>Date
                                            <span className={'after-triangle'}>&#9662;</span></p>
                                    </div>
                                    <div className={'outbox__paper__inbox-container__left-container__checkbox-container__checkbox2'}>
                                        <Checkbox />
                                        <p>Feb 13, 2020 (6 days ago)</p>
                                    </div>
                                </div>
                                <div className={'outbox__paper__inbox-container__left-container__subject-container'}>
                                    <p className={'outbox__paper_inbox-title'}>Subject</p>
                                    <p>my design test for email</p>
                                </div>
                            </div>
                            <div className={'outbox__paper__inbox-container__right-container'}>
                                <p className={'outbox__paper_inbox-title'}>To</p>
                                <p>Eugen Gorlov</p>
                            </div>

                        </>
                    ) : (

                        <>
                            <p className="inbox__paper__grid__select-all"><Checkbox /> Select All</p>
                            <InboxTable
                                date={'Feb 13, 2020 (6 days ago)'}
                                subject={'my design test for email'}
                                states={'TO'}
                                emaildata='Eugen Gorlov'
                            />
                        </>
                    )}
                </div>
                <Button className={'outbox__paper__button'} variant={'secondary'}>Delete Selected</Button>
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
                actions={3}
                leftActions={false}
            />

            <Button className={'outbox__button'} variant={'secondary'}>Delete Selected</Button>
        </div>
    )
};

export default Outbox;
