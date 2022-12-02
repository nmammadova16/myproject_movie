import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import SimpleSlider from '../../components/Slider/Slider';
import {  fetchSlider } from '../../redux/actions';
import { connect } from 'react-redux';

class MainPage extends Component {
    componentDidMount() {
       this.props.getSlider()
    }
    render() {
        return (
            <div className="main-page">

                <Header />
                <SimpleSlider />

                <main className="main-page__content">
                    <section>
                    </section>
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox />
                        </div>
                        <div className="main-page__movies">
                            <Movies />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites />
                    </aside>
                </main>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getSlider: () => dispatch(fetchSlider("matrix"))
    }
  }

export default connect(null, mapDispatchToProps)(MainPage);