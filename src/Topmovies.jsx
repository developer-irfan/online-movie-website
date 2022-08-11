import React, {useContext} from 'react';
import MoviesCards from './MoviesCards';
import MovieCardDetails from './MovieCardDetails';
import HomeSectionCode from './HomeSectionCode';
import CreateContext from "../src/Context/CreateContext";

const Topmovies = () => {
    const [data,setData] = useContext(CreateContext);
    return (
        <>
        {
            data.map((value,index) => {
                return(
                    <>
                    <h1>{value.id}</h1>
                    <h2>{value.name}</h2>
                    <h2>{value.age}</h2>
                    </>
                )
            })
        }
            <HomeSectionCode
                imgSrc="https://static0.srcdn.com/wordpress/wp-content/uploads/2018/12/Best-Netflix-Christmas-Movies.jpg"
                movieTitle="Top Movies"
                subTitle="Movie Rated"
                movieParagraph="Movies are for fun and Entertainment So there are the list of Top movies you can watch it and enjoy your favourite movies You can also go to top movies lists and check the top Rated movies include hollywood and bollywood movies!"
            />
            <br />
            <br></br>
            <br></br>
            <div className="container-fluid">
                <div className="row">
                    {
                        MovieCardDetails.map((value, index) => {
                            return <MoviesCards
                                key={index}
                                movieImgSrc={value.movieImgSrc}
                                movieCardTitle={value.movieCardTitle}
                                movieCardParagraph={value.movieCardParagraph}
                                btn={value.btn}
                                WatchingLink={value.WatchingLink}
                            />
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Topmovies;