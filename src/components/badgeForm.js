import React from 'react';

class BadgeForm extends React.Component {
    state = {}

    handleChange = e => {
        // console.log({
        //     name:e.target.name,
        //     value:e.target.value
        // });
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleClick = e => {
        console.log("button was clicked");
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('form was submitted');
        console.log(this.state);
    }

    render() {
        const {onChange, formValue} = this.props
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={formValue.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={formValue.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={formValue.email}
                            />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={formValue.jobTitle}
                            />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.state.twitter}
                            />
                    </div>
                    <button className="btn btn-primary" onClick={this.handleClick}>Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;