import React, { Component } from 'react';
import axios from 'axios';

export class placementForm extends Component {

    constructor(props){
        //all JS classes must do this
        super(props);

        //which states/data we need
        this.state = {
            judgeName: '',
            hostingOrg: '',
            event: '',
          
            large1: '',
            large2: '',
            large3: '',
            large4: '',
            large5: '',
            largeParticipated: '',
            
            small1: '',
            small2: '',
            small3: '',
            small4: '',
            small5: '',
            smallParticipated: '',
        }

    }

    // onChangeEventCode =(e)=>{
    //     this.setState({
    //         //target is the textbox and value is the textboxes value
    //         eventCode : e.target.value
    //     })
    // }
    // onChangeSigningInOut =(e)=>{
    //     this.setState({
    //         //target is the radio and value is the radio value
    //         signingInOut : e.target.value
    //     })
    // }

    // onChangeEvent =(e)=>{
    //     this.setState({
    //         //target is the textbox and value is the textboxes value
    //         event : e.target.value
    //     })
    // }

    // onChangeOrg =(e)=>{
    //     this.setState({
    //         //target is the drop down and selected is the dropdowns value
    //         org : e.target.value
    //     })
    // }

    // onChangeEid =(e)=>{
    //     this.setState({
    //         //target is the drop down and value is the dropdowns value
    //         eid : e.target.value
    //     })
    // }

    // onChangeYear = (e)=>{
    //     this.setState({
    //         year : e.target.value
    //     })
    // }

    // onChangeMajor =(e)=>{
    //     this.setState({
    //         //target is the textbox and value is the textboxes value
    //         major : e.target.value
    //     })
    // }

    onSubmit = (e)=>{
        //wont launch default action (I think its a page refresh)
        e.preventDefault();
        const placement ={

            judgeName:'aashay',//this.state.judgeName,
            hostingOrg: 'hello world',
            event: 'event 1',//this.state.event,
          
            large1: this.state.large1,
            large2: this.state.large2,
            large3: this.state.large3,
            large4: this.state.large4,
            large5: this.state.large5,
            largeParticipated: this.state.largeParticipated,
            
            small1: this.state.small1,
            small2: this.state.small2,
            small3: this.state.small3,
            small4: this.state.small4,
            small5: this.state.small5,
            smallParticipated: this.state.smallParticipated,
        }
        //debugging
        console.log(placement);
        //**actually sending data to express then mongo
        axios.post('http://localhost:5000/placement/add',placement)
            .then(res=>console.log(res.data));
        //clear form
        this.setState({
            judgeName: '',
            hostingOrg: '',
            event: '',
          
            large1: '',
            large2: '',
            large3: '',
            large4: '',
            large5: '',
            largeParticipated: '',
            
            small1: '',
            small2: '',
            small3: '',
            small4: '',
            small5: '',
            smallParticipated: '',
        })
       
    }
    render() {
        return (
            <div>
                <h3>Sign into the event</h3>
                <form onSubmit={this.onSubmit}>
                    <label>Event Code</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.eventCode}
                        onChange={this.onChangeEventCode}
                    />
      
                    <br/>
                    <label>EID</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.eid}
                        onChange={this.onChangeEid}
                    />
                    <br/>
                    <label>Org</label>
                    <select required className="form-control" value={this.state.org} onChange={this.onChangeOrg}>
                        <option value="AAES">AAES</option>
                        <option value="AEI">AEI</option>
                        <option value="AICHE">AICHE</option>
                        <option value="ASCE">ASCE</option>
                        <option value="ASME">ASME</option>
                        <option value="BMESF">BMESF</option>
                        <option value="ECHO">ECHO</option>
                        <option value="ESW">ESW</option>
                        <option value="HKN">HKN</option>
                        <option value="IEEE">IEEE</option>
                        <option value="LHR">LHR</option>
                        <option value="OXE">OXE</option>
                        <option value="PTS">PTS</option>
                        <option value="SASE">SASE</option>
                        <option value="SFE">SFE</option>
                        <option value="SNAP">SNAP</option>
                        <option value="SWEEP">SWEEP</option>
                        <option value="TBP">TBP</option>
                        <option value="TEAM PG">TEAM PGE</option>
                        <option value="TXTPEG">TXTPEG</option>
                        <option value="N/A">N/A</option>
                    </select>
                    <br/>
                    <label>Event</label>
                    <select required className="form-control" value={this.state.event} onChange={this.onChangeEvent}>
                        <option value="1">Event 1</option>
                        <option value="2">Event 2</option>
                        <option value="3">Event 3</option>
                    </select>
                    <br/>
                    <label>Select Year *</label>
                    <div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="1st Year" checked={this.state.year === "1st Year"} onChange={this.onChangeYear}/>
                                1st Year
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="2nd Year" checked={this.state.year === "2nd Year"} onChange={this.onChangeYear}/>
                                2nd Year
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="3rd Year" checked={this.state.year === "3rd Year"}  onChange={this.onChangeYear}/>
                                3rd Year
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="4th Year" checked={this.state.year === "4th Year"} onChange={this.onChangeYear} />
                                4th Year
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Other" checked={this.state.year === "Other"} onChange={this.onChangeYear} />
                                Other
                            </label>
                        </div>
                    </div>
                    
                    <br/>
                    <label>Major</label>
                    <select required className="form-control" value={this.state.major} onChange={this.onChangeMajor}>
                        <option value="ARE">ARE</option>
                        <option value="ASE">ASE</option>
                        <option value="BME">BME</option>
                        <option value="CE">CE</option>
                        <option value="CHE">CHE</option>
                        <option value="COE">COE</option>
                        <option value="COE">COE</option>
                        <option value="ECE">ECE</option>
                        <option value="EVE">EVE</option>
                        <option value="ME">ME</option>
                        <option value="PGE">PGE</option>
                        <option value="Other">Other</option>
                    </select>
                    <br/>
                    <label>Signing-In or Signing-Out *</label>
                    <div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Signing-in" checked={this.state.signingInOut === "Signing-in"} onChange={this.onChangeSigningInOut}/>
                                Signing-in
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="Signing-out" checked={this.state.signingInOut === "Signing-out"} onChange={this.onChangeSigningInOut}/>
                                Signing-out
                            </label>
                        </div>
                    </div>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default placementForm
