import React, { Component } from 'react';
import data from './Data.json';
import NewsRelated from './NewsRelated';

class Details extends Component {

    render() {
        // console.log(this.props.match.params.id);
        var dem = 1;


        return (
            <div>
                <div>
                    {/* begin chitiet */}
                    {
                        data.map((value, key) => {
                            if (value.id === parseInt(this.props.match.params.id,20) ) {
                                return (
                                    <div className="jumbotron jumbotron-fluid" key={key}>
                                        <div className="container">
                                            {/* <h1 className="display-3">Chi tiết tin tức</h1> */}
                                            <h4>{value.tittle}</h4>
                                            <img src={value.image} alt="" />
                                            <hr className="my-2" />
                                            <p>{value.content}</p>
                                        </div>
                                    </div>
                                )
                            }
                            return true;
                        })
                    }

                    <div className="container">
                        <h4 className="card-title text-center">Tin liên quan</h4>
                        <div className="card-deck">
                            {
                                data.map((value, key) => {
                                    if(value.id !== parseInt(this.props.match.params.id,20)){
                                        if (dem <= 4) {
                                            dem++;
                                        return (
                                            <NewsRelated 
                                                key={key}
                                                newId={value.id}
                                                tittle={value.tittle}
                                                image={value.image}
                                                quote={value.quote}></NewsRelated>
                                        )
                                        }
                                    }
                                   
                                        return true;

                                })
                            }



                        </div>
                    </div>
                    <br />
                    {/* end chitiet */}
                </div>

            </div>
        );
    }
}

export default Details;
