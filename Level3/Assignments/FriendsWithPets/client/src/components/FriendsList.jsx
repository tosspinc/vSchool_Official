import React from "react";
import Friend from "./Friend";
import FriendsListData from "./FWPData";

export default function FriendsList() {
    const friends = FriendsListData.map(fdata => {
        return (
            <Friend
            key={fdata.id}
            {...fdata}          /*spread syntax for fdata array data.*/
            />
        )
    })
    return (
        <div className="friends-list">
            {friends}
        </div>
    );
}

/*es5 format:

function FriendsList() {
    var friends = FriendsListData.map(function(fdata) {
        return React.createElement(
            Friend,
            { key: fdata.id },
            fdata
        );
    });
    return React.createElement(
        'div',
        { className: 'friends-list' },
        friends
    );
}

export default FriendsList;
*/