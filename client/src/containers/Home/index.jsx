import React from 'react'
import { connect } from 'react-redux';

class Home extends React.Component {
    componentDidMount() {
        const { onLoad } = this.props;

        fetch( 'http://localhost:5000/users/fake_id')
            .then( res => res.json() )
            .then( data => onLoad( data ))
        // let fakeResData = {
        //     articles: [
        //         { name: 'one' },
        //         { name: 'two' },
        //         { name: 'three' }
        //     ]
        // }
        // onLoad( fakeResData );
    }

    renderProps() {
        let { users } = this.props;
        if ( users ) {
            return users.map(
                ( user, i ) =>
                    <div key={ i }>{ user.name }</div>
            );
        }
        return []
    }

    render() {
        let { user } = this.props;

        return (
            <div>
                { user && Object.values(user).map( field =>
                    <div> {field} </div>) }
            </div>
        )
    }
}

const mapStateToProps = state => ( {
    user: state.home.user,
} )

const mapDispatchToProps = dispatch => ( {
    onLoad: data => dispatch( { type: 'HOME_PAGE_LOADED', data } ),
} )

export default connect( mapStateToProps, mapDispatchToProps )( Home );