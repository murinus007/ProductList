import React from 'react';

/// Component for Comments
let Comment = (props) => {
    console.log(props.description, props.date)
    return (
        <div>
            <p>{props.description}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default Comment;