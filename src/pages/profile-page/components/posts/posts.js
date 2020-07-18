import React from "react";
import Typography from "../../../../components/common/typography/typography";
import PostCard from "./post-card/post-card";
import Pagintation from "./pagination/pagination";
import './posts.sass';

const Posts = () =>
    <div className={'posts'}>
        <Typography firstText={'My'} secondText={'posts'} />
        <PostCard
            heading={'This is a simple text for a website redesign'}
            id={1}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
        'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat.'}
            timePosted={'on: February 21, 2020, 03:56:27 pm'}
        />
        <PostCard
            heading={'This is a simple text for a website redesign'}
            id={1}
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
        'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat.'}
            timePosted={'on: February 21, 2020, 03:56:27 pm'}
        />
    <Pagintation totalPages={1332} />
    </div>;

export default Posts;
