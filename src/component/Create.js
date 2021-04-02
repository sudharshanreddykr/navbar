import React, { Component } from 'react';
import { CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';


const url ="https://blogapi21.herokuapp.com/";

class Create extends Component {

    constructor(props) {
        super(props);
        this.username=React.createRef();
        this.title=React.createRef();
        this.subTitle=React.createRef();
        this.image=React.createRef();
        this.content=React.createRef();
        this.state ={
            content:''
        }
        this.submitHandeler=this.submitHandeler.bind(this);
        
    }

    submitHandeler(e) {
        e.preventDefault();
        const data = {
            username: this.username.current.value,
            title:this.title.current.value,
            subTitle:this.subTitle.current.value,
            image:this.image.current.value,
            content:this.state.content,
        }
        console.log('final output=', data);
        
        const headers= {
            'Content-type':'application/json;charset-utf-8',
            'Access-Control-Allow-Origin':'*'
        }

        Axios.post(`${url}`,data,headers)
        .then(res => {
            alert('successfull');
            console.log('res=', res);
        })
        .catch(err => console.log(err.message));
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-3 text-center"> Create</h1>      
                    </div>
                </div>
                <div className="row">
                        <div className="col-md-8 offset-md-3">
                            <div className="jumbotron">
                                <form onSubmit={this.submitHandeler} method="POST" autoComplete="off">
                                    <div className="form-group">
                                        <label htmlFor="username">userName</label>
                                        <input type="text" name="username" id="username" ref={this.username} className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input type="text" name="title" id="title" ref={this.title} className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subTitle">SubTitle</label>
                                        <input type="text" name="subTitle" id="subTitle" ref={this.subTitle} className="form-control" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Title</label>
                                        <input type="url" name="image" id="image" ref={this.image} placeholder="Enter image link" className="form-control"required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="content">content</label>
                                        <CKEditor className="form-control"  editor={ClassicEditor} content={this.state.content} onChange={(event,editor) =>{
                                            this.setState({
                                                content:editor.getData()
                                            })
                                        }}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Create" className="btn btn-outline-success"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

            </div>
        );
    }
}

export default Create;
