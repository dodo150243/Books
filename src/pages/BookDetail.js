import React from 'react';
import BookDetailForm from "../components/BookDetailForm";
import { useParams } from 'react-router-dom';
// import PhotoList from '../components/PhotoList';

function BookDetail() {
    const param = useParams();
    console.log(param.isbn);
    return (
        <>
        
                <BookDetailForm isbn={param.isbn} />
                {/* <PhotoList username={param.username} /> */}
            
        </>
    )
}

export default BookDetail;
