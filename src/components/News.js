import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './Data.json';

class News extends Component {
    render() {
        
        return (
            <div className="row" style={{background: '#424242'}} >
                {/* begin tintuc */}
                <div className="container ">
                    <br />
                    <div className="card-deck mt-5">
                        { data.map((value, key) => {
                            return (
                                <NewsItem 
                                key={key} 
                                newId={value.id}
                                tittle={value.tittle} 
                                image={value.image}
                                quote={value.quote}>
                                </NewsItem>
                            )
                        })}
                    </div>
                    <br />
                </div>
                {/* end tintuc */}

            </div>
        );
    }
}

export default News;
