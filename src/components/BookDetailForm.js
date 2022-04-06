import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container, Row, Card, Col, CardImg, CardGroup } from "reactstrap";
import { IoLocationSharp, IoEarth } from 'react-icons/io5';

function ProfileForm({ isbn }) {
    // const [search, setPhoto] = useState("");
    // const [result, setResult] = useState([]);
    // const [submitted, setSubmitted] = useState(false);


    // const searchPhotos = (event) => {
    //     axios.get(`https://se-book-store.herokuapp.com/api/v1/books?title=${search}`).then((response) => {

    //             setResult(response.data);
    //             console.log(response);
    //             setSubmitted(true);

    //         });
    // };
    // useEffect(() => {
    //     searchPhotos();
    // }, []);

    // const newProduct = () => {
    //     axios.get(`https://se-book-store.herokuapp.com/api/v1/books?title=${search}`).then((response) => {

    //             setResult(response.data);
    //             console.log(response);
    //         });
    //     setSubmitted(false);
    // };

    const [book, setProfile] = useState({});

    useEffect(() => {
        axios.get(`https://se-book-store.herokuapp.com/api/v1/books/${isbn}`)
            .then((response) => {
                setProfile(response.data);
                console.log(response);
                // setSubmitted(true);
            });
    }, [isbn]);

    return (

        <>
            <Container>
                <div className='Profile'>
                    <div className='Profile-img'>
                        <img src={book.thumbnailUrl} />
                    </div>
                    <div className='Profile-detail'>
                        <h2>{book.title} </h2>
                        <b>Short Description</b><p>{book.shortDescription}</p>
                        <b>Long Description</b><p>{book.longDescription}</p>
                        <b>Categories</b><p>{book.categories}</p>
                        <b>Authors</b><p>{book.authors}</p>
                    </div>
                </div>
            </Container>

        </>


    )


}

export default ProfileForm;
