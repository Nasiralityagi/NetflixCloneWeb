import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import  Netflix  from '../static/images/netflix.png';
import { ReactComponent as Down_arrow } from '../static/images/down_arrow.svg';
import { ReactComponent as Search } from '../static/images/search.svg';
import { ReactComponent as Bell } from '../static/images/bell.svg';
import { ReactComponent as More } from '../static/images/more.svg';

const menu = ['Home', 'TV Shows', 'Movies', 'Recently', 'My List'];

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            scrolling: false,
            userInput: ''
        }
        // use to debounce api call

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    //changes the scrolling state depending on the Y-position
    handleScroll = () => {
        if (window.scrollY === 0) {
            this.setState({
                scrolling: false
            });
        } else if (window.scrollY > 50) {
            this.setState({
                scrolling: true
            });
        }
    }

    onChange = async (event) => {
        await this.setState({ userInput: event.target.value })
        const { userInput } = this.state

        await this.makeAipCall(userInput);
    }

    onLogoClick = () => {
        // reset input state
        this.setState({ userInput: '' })
    }


    render() {

        const { scrolling } = this.state;

        return (
            <nav className={"navigation " + (scrolling ? "black" : "")}>
                <ul className="navigation__container">
                    <NavLink to="/search" onClick={() => this.onLogoClick()}>
                        <img className="navigation__container--logo" src={Netflix} alt="" />
                    </NavLink>
                    <Down_arrow className="navigation__container--downArrow-2" />
                    {menu.map((title) => <div className="navigation__container-link pseudo-link">{title}</div>)}
                    <div className="navigation__container--left">
                        <Search className="logo" />
                        <input
                            value={this.state.userInput}
                            onChange={(event) => this.onChange(event)}
                            className="navigation__container--left__input"
                            type="text"
                            placeholder="Title, genres, people" />
                    </div>
                    <div className="navigation__container-link pseudo-link">KIDS</div>
                    <div className="navigation__container-link pseudo-link">DEVOTIONAL</div>
                    <Bell className="navigation__container--bellLogo" />
                    <More className="navigation__container--downArrow" />
                </ul>
            </nav>
        );
    };


}

export default withRouter(Navbar);