import React, { Component } from 'react';
import $ from 'jquery'; 
import imageHelpers from '../../../utils/imageHelpers.js';
import cloudinary from 'cloudinary';


export default class ImageUploadArea extends Component {
    constructor(props) {
        super(props);
        cloudinary.config({
            cloud_name: 'swaplet',
            api_key: '311893892462661',
        })
        cloudinary.cloudinary_js_config();
        this.state = {
            image_id: ""
        }; 
    }

    componentDidMount() {
        document.getElementById('imageForm').addEventListener("change", (event) => {
            //console.log(document.getElementById("image_id"));
            this.handleSubmit(event);
        })
    }

    componentWillUnmount() {
        //clearing event listener to prevent leakage
        document.getElementById('imageForm').removeEventListener("change");
    }

    componentWillUpdate(nextProps, nextState) {
        let { image_id } = this.state;
        let nextImageId = nextState.image_id;
        if(image_id !== nextImageId) {
            
        }
    }

    handleSubmit(event) {
        let checker = document.getElementById('image_id').value;
        //blame orlando for this
        let interval = setInterval(() => {
            let checkee = document.getElementById('image_id').value;
            if(checker !== checkee) {
                this.setState({
                    image_id: checkee
                })
                clearInterval(interval);
            }
        }, 50) 
    }

    render() {
        let cloudinary_cors = `/cloudinary_cors.html`;
        let uploadTag = { __html: cloudinary.uploader.image_upload_tag('image_id', { 
            callback: cloudinary_cors,

        })};
        return (
            <div>
                <form id="imageForm" onChange={this.handleSubmit}>
                    <h4>Upload a {this.props.type} Image</h4>
                    <span dangerouslySetInnerHTML={ uploadTag }/>
                    <input  type='text' id='image_id' value={this.state.image_id} name='image_id'/>
                </form>
            </div>
        )
    } 
}