import React from 'react';
import header from '../images/badge-logo.svg';
import Navbar from '../components/navbar';
import Badge from '../components/badge';
import BadgeForm from '../components/badgeForm';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">x
                    <img className="img-fluid" src={header} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                name="Jorge"
                                lastName="Almonacid"
                                twitter="cokealmonacid"
                                jobTitle="Software Engineer"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;