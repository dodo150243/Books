import axios from 'axios';
import Band from './BandForm';
import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Col, CardImg, CardGroup } from "reactstrap";
import { getMetadata } from 'firebase/storage';

// import '../css/templatemo-style.css';
// import '../css/templatemo-misc.css';
// import '../css/font-awesome.css';

function Header() {
    const [search, setPhoto] = useState("");
    //const [clientId, setClientId] = useState("z4MEN_-nG2OKrQiNRsHy39vww04sJGKcqXUX0COKcW8");
    const [result, setResult] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        setPhoto(event.target.value);
    }
    //  function handleSubmit(event) {
    // console.log(search);
    // const url = "https://api.unsplash.com/search/photos?page=1&query=" +
    // search + "&client_id=" + clientId;

    // axios.get(url).then(response => {
    //     console.log(response);
    //     setResult(response.data.results);
    // })

    const searchPhotos = (event) => {
        // axios.get(`https://api.unsplash.com/search/photos?per_page=30&query=
        //     ${search}&client_id=${process.env.REACT_APP_CLIENT_ID}`).then((response) => {

        //         setResult(response.data.results);
        //         console.log(response);
        //         setSubmitted(true);

        //     });

            axios.get(`https://se-book-store.herokuapp.com/api/v1/books?title=${search}`).then((response) => {

                setResult(response.data);
                console.log(response);
                setSubmitted(true);

            });
    };
    useEffect(() => {
        searchPhotos();
    }, []);

    const newProduct = () => {
        axios.get(`https://se-book-store.herokuapp.com/api/v1/books?title=${search}`).then((response) => {

                setResult(response.data);
                console.log(response);
            });
        setSubmitted(false);
    };

    // const showProfile = () =>{
    //     setSubmitted(false);
    // }

    return (
        <>
            <header className="site-header container-fluid">
                <div class="top-header">
                    <div class="logo col-md-6 col-sm-6">
                        <h1><a href="/home"><em>TK</em>Books</a></h1>
                        {/* <span>Responsive HTML5 Template</span>  */}
                    </div>
                    <div class="social-top col-md-6 col-sm-6">
                        <ul>
                            <li><a href="#" class="fa fa-facebook"></a></li>
                            <li><a href="#" class="fa fa-twitter"></a></li>
                            <li><a href="#" class="fa fa-linkedin"></a></li>
                            <li><a href="#" class="fa fa-google-plus"></a></li>
                            <li><a href="#" class="fa fa-flickr"></a></li>
                            <li><a href="#" class="fa fa-rss"></a></li>
                        </ul>
                    </div>
                </div>

                <div class="main-header">
                    <div class="row">
                        
                        <div id="menu" class="menu-wrapper col-md-9 col-sm-6 col-xs-4">
                            <li id="responsive-search" class="toggle-menu visible-sm visible-xs">
                                <input onChange={handleChange} type="text" name="search" placeholder="Search for Photo.." />

                                <button onClick={newProduct} type="submit">Search</button>

                            </li>
                            <a href="#" class="toggle-menu visible-sm visible-xs"><i class="fa fa-bars"></i></a>
                            <ul class="sf-menu hidden-xs hidden-sm">
                                <li id="li" class="active"><a href="index.html">Home</a></li>
            
                                <li id="li"><a href="#">Books</a></li>

                                <li><a id="cont-li" href="contact.html">Contact</a></li>
                                <li>
                                    <input onChange={handleChange} type="text" name="search" placeholder="Search for Photo.." />

                                    <button onClick={newProduct} type="submit">Search</button>

                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div id="responsive-menu">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Photos</a>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </header>

            {/* {submitted  ? (<>


            </>
            ): this.props.conditionB ? (<></>)
      : (<></>)} */}

            {submitted ? (
                <>
               
                </>


            ) : (
                
                <div className='container'>
                    {result.slice(0,20).map((search) => {
                        return (
                           
                            <div id="card">
                                <Card>
                                    <a id="img-name" href={"/" + search.isbn}>
                                        <p id='username'>{search.title}</p></a>
                                    <CardImg src={search.thumbnailUrl} />
                                    <div id="description">
                                        <p><b>shortDescription</b> {search.shortDescription}</p>
                                    </div>
                                </Card>
                            </div>






                        )
                    })}
                </div>
               
            )}


        </>

    );
}

export default Header