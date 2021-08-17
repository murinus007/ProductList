import React from 'react';
import { useFirestore } from "react-redux-firebase";
import { useHistory } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'

let CreateProduct = () => {

    const firestore = useFirestore();
    const history = useHistory(); 

    /// Properties for fields
    let name;
    let description;
    let fullDescription;
    let imgUrl;
    let count;

    let createProduct = () => {
        /// Validation for input fields
        if (name === null || typeof name === "undefined") {
            alert(`name shouldn't be empty`)
            return 
        } else if (description === null || typeof description === "undefined") {
            alert(`description shouldn't be empty`)
            return 
        } else if (count === null || typeof count === "undefined") {
            alert(`count shouldn't be empty`)
            return 
        } else if (imgUrl === null || typeof imgUrl === "undefined") {
            alert(`image Url shouldn't be empty`)
            return 
        }  else if (fullDescription === null || typeof fullDescription === "undefined") {
            alert(`fullDescription shouldn't be empty`)
            return 
        }

        /// Write Data to firebase
        firestore
        .collection('products')
        .add({
          name: name,
          description: description,
          fullDescription: fullDescription,
          imgUrl: imgUrl,
          count: count,
          id: uuidv4(),
        })
        .then ( () => {
            history.push("")
        })
    }

    return (
        <div>
            <div>
                <p>name of product</p>
                <textarea onChange={(e) => name = e.target.value}></textarea>
                <p>short description about product</p>
                <textarea onChange={(e) => description = e.target.value}></textarea>
                <p>count of product</p>
                <textarea onChange={(e) => count = e.target.value}></textarea>
                <p>add image URL</p>
                <textarea onChange={(e) => imgUrl = e.target.value}></textarea>
                <p>full description about product</p>
                <textarea onChange={(e) => fullDescription = e.target.value}></textarea>
            </div>
            <div>
                <button onClick={createProduct}>Add Product</button>
                <button onClick={() => history.push('/')}>Cancel</button>
            </div>
        </div>
    )
}

export default CreateProduct;