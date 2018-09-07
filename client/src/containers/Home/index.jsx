import React from 'react'
import { connect } from 'react-redux';

class Home extends React.Component {
    componentDidMount() {
        const { onLoad } = this.props;

        fetch( 'http://localhost:5000/users')
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
        let { articles } = this.props;
        if ( articles ) {
            return articles.map(
                ( article, i ) =>
                    <div key={ i }>{ article.name }</div>
            );
        }
        return []
    }

    render() {
        const { articles } = this.props;

        return (
            <div>
                { this.renderProps() }
            </div>
        )
    }
}

const mapStateToProps = state => ( {
    articles: state.home.articles,
} )

const mapDispatchToProps = dispatch => ( {
    onLoad: data => dispatch( { type: 'HOME_PAGE_LOADED', data } ),
} )

export default connect( mapStateToProps, mapDispatchToProps )( Home );