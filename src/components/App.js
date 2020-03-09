import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID f-TxoeLfRDimvES_dP36TA36cYwXlxGz_epKQt0S0eQ'  
            }
        });

        console.log(response.data.results);
    } 

    render() {
        return (
            <div className="ui container" style={{ marginTop: '32px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }   
}


export default App;
