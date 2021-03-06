import React, { Component } from 'react'

export default class CreateProject extends Component {

    state = {
        title:'',
        content:'',
    }

    handleChange = (e) => {
        this.setState({[e.target.id]:e.target.value})
    }

    onsubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        
        return (
        <div className='container' >
            <form className='white' onSubmit={this.onsubmit} >
                <h5 className='grey-text text-darken-3'>Create New Project</h5>
                <div className='input-field'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' onChange={this.handleChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='content'>Project Content</label>
                    <textarea className='matirialize-textarea' type='text' id='content' onChange={this.handleChange} />
                </div>
                <div className='input-field'>
                    <button className='btn pink lighten-1 z-depth-0'>Create</button>
                </div>
            </form>
        </div>
        )
    }
}
