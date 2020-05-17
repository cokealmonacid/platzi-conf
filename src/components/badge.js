import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render(){
       return(
        <div>
            <div>
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div>
                <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                <h1>Jorge <br/> Almonacid</h1>
            </div>
            <div>
                <p>Software Engineer</p>
                <p>@cokealmonacid</p>
            </div>
            <div>
                #platziconf
            </div>
        </div>
       );
    }
}

export default Badge;