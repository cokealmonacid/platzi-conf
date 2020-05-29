import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-logo.svg';
import BadgesList from '../components/badgesList';
import PageLoading from '../components/pageLoading';
import PageError from '../components/pageError';

import api from '../api';

class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: [],
    }

    componentDidMount = () => {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({loading: true, error:null});
        try{
            const data = await api.badges.list();;
            this.setState({loading: false, data});
        } catch(error) {
            this.setState({loading: false, error});
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Conf logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                    <BadgesList badges={this.state.data} />
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;