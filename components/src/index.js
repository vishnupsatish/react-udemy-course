import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" text="I hated this stupid blog post!" imageSource={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Yesterday at 4:45PM" text=":rooree:" imageSource={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="December 12 at 2:35AM" text="I loved the blog post." imageSource={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
