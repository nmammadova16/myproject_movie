import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";

class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
        <div className="scc">
            <div className="sliderContainer">
                <Slider {...settings}>
                    {this.props.sliderMovie.map((movie) => (
                        <li className="movies__item" key={movie.imdbID}>
                            <img className="sliderImage" src={movie.Poster} alt ={movie.Title} />
                            <h3 className="sliderTitle">{movie.Title}</h3>

                        </li>
                    ))}
                </Slider>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sliderMovie: state.sliderMovie,
    };
};
export default connect(mapStateToProps)(SimpleSlider);
