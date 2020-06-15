import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';


export class signinTable extends Component {

    constructor(props){
        
        //all JS classes must do this
        super(props);
        this.getRowData = this.getRowData.bind(this);
        this.getTableHeaders = this.getTableHeaders.bind(this);
        this.state={
            signins:[{ id: 1, name: '', age: 21, email: '' }]
        }

    }
    componentDidMount(){
        axios.get('http://localhost:5000/signIn/')//get route for all docs
            .then( (signins) =>{
                this.setState({
                    signins:signins.data
                });
                console.log(this.state.signins)//see if we're handling the data right
            })

    }
   
    getKeys = function() {
        if(this.state.signins[0] !== undefined){
            // console.log(this.state.signins[0].eid)
            return Object.keys(this.state.signins[0]);
        }
    }
    getTableHeaders = function(){
        // let header = this.getKeys()//Object.keys(this.state.signins[0])
        let header = this.getKeys()
        console.log('header' + header)
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    getRowData = function() {
        let items = this.state.signins;
        console.log(items);
        let keys = this.getKeys()

        return items.map( (row, index) => {
            console.log(row._id)
            return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        });
    }

    render() {
        return (
            <div style={{overflowX: 'scroll'}}>
                <Table striped>
                    <thead>
                        <tr>{this.getTableHeaders()}</tr>
                    </thead>
                    <tbody>
                        {this.getRowData()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default signinTable


const RenderRow = (props) =>{
    return (
        props.keys.map( (key, index) => {
            // if (index === 0) {
            //     return <td key={props.data[key]}>{props.data[key]}</td>
            // }
            return  <td>
                <input onChange={(e) => this.handleChange(index, 'qty', e.target.value)} 
                                     type={props.data[key].type} 
                                    //  className='form-control' 
                                    //  step='1' min="1"
                                     key={props.data[key]}
                                     value={props.data[key]}/>
            </td>
            
            //  <td key={props.data[key]}>{props.data[key]}</td>
        })
    );
}