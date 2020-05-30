import React from 'react';

class BadgeForm extends React.Component {
    state = {}

    handleClick = e => {
        console.log("button was clicked");
    }

    render() {
        const {onChange, formValue, onSubmit, error} = this.props
        return (
            <div>
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
                            value={formValue.twitter}
                            />
                    </div>
                    <button className="btn btn-primary" onClick={onSubmit}>Save</button>

                    {error && (
                        <p className="text-danger">{error}</p>
                    )}
                </form>
            </div>
        )
    }
}

export default BadgeForm;