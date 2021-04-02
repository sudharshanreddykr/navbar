import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

const url ="https://blogapi21.herokuapp.com/";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogInfo:[]
        }
    }
    componentDidMount() {
        //fetch your data from api

        Axios.get(`${url}`)
        .then(res=>{console.log(res.data)
            this.setState({
                blogInfo:res.data
            });
        })
        
        .catch(err=>console.error(err))
    }
    delHandeler(id) {
        const st=window.confirm("Are you sure to delete id = "+id);
        if(st) {
            Axios.delete(`${url}/${id}`)
                .then(res => {
                    alert('succesfully deleted.');
                    window.location = '/';
                }).catch(err => console.error(err))
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-3">Home</h1>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.blogInfo.map((item,key) => {
                            return(
                                <div className="col-md-4" key={key}>
                                    <div className="card">
                                    <img src={item.image} alt="" className="card-img-top rounded" width="200" height="200"/>
                                        <div className="card-body">
                                            
                                            <article className="txt">
                                                <h1 className="text-center text-info text-capitalize">{item.title}</h1>
                                                <p className="text-left">
                                                    <span className="text-muted">{item.username}</span>

                                                </p>
                                                <p className="text-left">
                                                    <strong>Created:</strong> <span className="text-warning">{item.createdAt}</span>
                                                </p>
                                            </article>
                                        </div>
                                        <div className="card-footer">
                                            <Link to={"/edit/"+item._id} className="btn btn-outline-info btn-sm">Edit</Link>
                                            <button className="btn btn-outline-danger btn-sm float-right" onClick={() =>this.delHandeler(item._id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;
