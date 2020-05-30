import React from 'react';
import PageLoading from '../components/pageLoading';
import PageError from '../components/pageError';
import BadgeDetails from './BadgeDetails';
import api from '../api';

class BadgeDetailContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});
        try{
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, data});
        } catch (error) {
            this.setState({loadnig: false, error});
        }
    }

    render(){
        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }
        const {data} = this.state;
        return <BadgeDetails badge={data} />
    }
}

export default BadgeDetailContainer;