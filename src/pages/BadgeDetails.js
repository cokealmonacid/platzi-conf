import React from 'react';
import confLogo from '../images/logo_conf.svg';
import Badge from '../components/badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import {Link} from 'react-router-dom';
import './styles/BadgeDetail.css';

function BadgeDetails (props) {
    const {badge, modalIsOpen, onOpenModal} = props;
    return(
        <div>
        <div className="BadgeDetails__hero">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={confLogo} alt="Logo de la Conferencia" />
                    </div>
                    <div className="col-6 BadgeDetails__hero-attendant-name">
                        <h1>{badge.firstName} {badge.lastName}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge name={badge.firstName} lastName={badge.lastName} email={badge.email} twitter={badge.twitter} jobTitle={badge.jobTitle} />
                </div>
                <div className="col-6">
                    <h2>Actions</h2>
                    <div>
                        <div><Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>Edit</Link></div>
                    </div>
                    <div>
                        <button onClick={onOpenModal} className="btn btn-danger">Delete</button>
                        <DeleteBadgeModal isOpen={modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge}>Lorem Ipsum</DeleteBadgeModal>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}

export default BadgeDetails;