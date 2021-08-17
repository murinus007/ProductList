import React from 'react';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import { useFirestoreConnect, useFirestore } from "react-redux-firebase";
import './details.css'
import Comment from "../comments/CommentItem"

export default function Details() {
    const firestore = useFirestore();
    const location = useLocation()
    const [newComment, setNewComment] = React.useState('');

    /// Connect to Firebase
    useFirestoreConnect({
        collection: `products`,
        storeAs: "products",
        collection: `comment`,
        where: [['productId', '==', location.state]],
        storeAs: "comment"
      });

    /// Firebase queries
    const products = useSelector((state) => state.firestore.data.products);
    const comments = useSelector((state) => state.firestore.data.comment);
    const product = products && Object.values(products).find((x) => x.id == location.state)

    /// Add Comment function
    let addComment = () => {
        let date = new Date()

        /// Write Data to firestore
        firestore
        .collection("comment")
        .add({
            description: newComment,
          date: date.toString(),
          productId: location.state
        })
        .then((docRef) => {
          console.log(docRef)
        });
    }

    return (
        <div className='detailsWindow'>
            <div>
            <img src={product.imageUrl} alt={'no img'}></img>
            <p>{product.name}</p>
            <p>{product.fullDescription}</p>
            <p>{product.count}</p>
            <p>{product.description}</p>
            </div>
            <div>
            <p>Comments:</p>
            {comments &&

            /// Comments
          Object.values(comments).map( (comment) => (
                <Comment description={comment.description} date={comment.date} />
            ))} 
                <textarea onChange={(event) => setNewComment(event.target.value)}></textarea>
                </div>
                <div>
                <button onClick={addComment}>Add Comment</button>
                </div>
            </div>    
    )
}
