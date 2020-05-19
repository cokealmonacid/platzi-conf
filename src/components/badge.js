import React from 'react';
import confLogo from '../images/badge-logo.svg';
import "./styles/badge.css";

class Badge extends React.Component {
    render(){
        const {name,lastName,jobTitle,twitter} = this.props
       return(
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="Badge__section-name">
                <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" className="Badge__avatar" />
                <h1>{`${name}\n${lastName}`}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{jobTitle}</h3>
                <div>@{twitter}</div>
            </div>
            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
       );
    }
}

export default Badge;