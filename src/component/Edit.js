import React, { Component } from 'react';
import Axios from 'axios';
import { CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const url ="https://blogapi21.herokuapp.com";

class Edit extends Component {
    constructor(props) {
        super(props) ;

        this.state= {
            id:this.props.match.params.id,
            username:'',
            title:'',
            subTitle:'',
            image:'',
            content:''

        };
        this.submitHandeler=this.submitHandeler.bind(this);
    }
    componentDidMount() {
        Axios.get(`${url}/${this.state.id}`)
        .then (res => {
            console.log(res.data);
            this.setState({
                username:res.data.username,
                title:res.data.title,
                subTitle:res.data.subTitle,
                image:res.data.image,
                content:res.data.content
            })
        })
        .catch(err => console.error(err));
    }

    
    submitHandeler(e) {
        e.preventDefault();


        
        const output = {
            username: this.state.username,
            title:this.state.title,
            subTitle:this.state.subTitle,
            image:this.state.image,
            content:this.state.content
        }
        console.log('output=',output);
        const headers= {
            'Content-type':'application/json;charset-utf-8',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
        Axios.patch(`${url}/${this.state.id}`,headers,output)
            .then(res => {
                alert('new data updated succesfully');
                window.location = '/';
            })
            .catch(err => console.error(err));
    }
    render() {
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="jumbotron text-center">
                            <div className="display-3 text-info">Edit</div>
                            <div className="text-muted">{this.state.id}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="col-md-8 offset-md-3">
                            <div className="jumbotron">
                                <form onSubmit={this.submitHandeler} method="POST" autoComplete="off">
                                    <div className="form-group">
                                        <label htmlFor="username">userName</label>
                                        <input type="text" name="username" id="username" value={this.state.username} className="form-control" onChange={(e) => this.setState({username:e.target.value}) } required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" name="title" id="title" value={this.state.title}  className="form-control" onChange={(e) => this.setState({title:e.target.value}) } required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subTitle">SubTitle</label>
                                        <input type="text" name="subTitle" id="subTitle" value={this.state.subTitle}  className="form-control" onChange={(e) => this.setState({subTitle:e.target.value}) } required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Title</label>
                                        <input type="url" name="image" id="image" value={this.state.image} placeholder="Enter image link" onChange={(e) => this.setState({image:e.target.value}) }className="form-control"required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="content">content</label>
                                        <CKEditor className="form-control"  editor={ClassicEditor} content={this.state.content} data={this.state.content} onChange={(event,editor) =>{
                                            this.setState({
                                                content:editor.getData()
                                            })
                                        }}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Update" className="btn btn-outline-success"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Edit;
