import React from 'react';
import PageLoading from '../components/pageLoading';
import PageError from '../components/pageError';
import BadgeDetails from './BadgeDetails';
import api from '../api';

class BadgeDetailContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
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
            this.setState({loading: false, error});
        }
    }

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true })
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false })
    }

    handleDeleteBadge = async e => {
        this.setState({loading: true, error: null});
        try{
            await api.badges.remove(this.props.match.params.badgeId);
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error});
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
        return <BadgeDetails onCloseModal={this.handleCloseModal} onOpenModal={this.handleOpenModal} badge={data} modalIsOpen={this.state.modalIsOpen} onDeleteBadge={this.handleDeleteBadge}/>
    }
}

export default BadgeDetailContainer;