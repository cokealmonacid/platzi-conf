import React from 'react';
import header from '../images/logo_conf.svg';
import Badge from '../components/badge';
import BadgeForm from '../components/badgeForm';
import PageLoading from '../components/pageLoading';
import api from '../api';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true, error: null});
        try {
            await api.badges.create(this.state.form);
            this.setState({loading: false});
        } catch (error) {
            this.setState({loading: false, error});
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />;
          }

          
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid BadgeNew__hero-image" src={header} alt="logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                name={this.state.form.firstName ||'FIRST_NAME'}
                                lastName={this.state.form.lastName ||'LAST_NAME'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValue={this.state.form} onSubmit={this.handleSubmit}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;