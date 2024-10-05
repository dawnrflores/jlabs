import { Component } from "react"
import MyGoogleMap from './MyGoogleMap'
import { error } from "laravel-mix/src/Log";

class IpIndex extends Component{
    constructor(props){
        super(props);

        this.state = {
            location: {
                ip: '',
                hostname: '',
                city: '',
                region: '',
                country: '',
                loc: '',
                postal: '',
                timezone: '',
            },
            histories: [],
            deleteItem: [],
            err: '',
        }
        

    }
    
    componentDidMount(){
        this.getIpAddress()
        this.fetchHistory()
    }

    getIpAddress(){
        console.log(process.env.APP_NAME)
        fetch(`https://ipinfo.io/json?token=${process.env.MIX_REACT_APP_IPINFO_SECRET}`)
            .then(response => response.json())
            .then(data => this.setState({location: {
                ip: data.ip,
                hostname: data.hostname,
                city: data.city,
                region: data.region,
                country: data.country,
                loc: data.loc,
                postal: data.postal,
                timezone: data.timezone,
            }}))        
    }

    getIpDetails(event){        
        fetch(`https://ipinfo.io/${event}/json?token=${process.env.MIX_REACT_APP_IPINFO_SECRET}`)
            .then(response => {
                if(response.status == 404){
                    this.setState({err: "Invalid IP Address"})
                    console.log(response)}
                else {this.setState({err: "OK"})}
                })
            .then(data => {this.setState({location: {
                ip: data.ip,
                hostname: data.hostname,
                city: data.city,
                region: data.region,
                country: data.country,
                loc: data.loc,
                postal: data.postal,
                timezone: data.timezone,
                }})
                console.log(data)}
            )
            .catch(error=>console.log(error))        
        }

    fetchHistory(){
        axios.get('/api/history')
            .then(response=> this.setState({histories:response.data}))
    }

    getAllIp(){
        return this.state.histories.map(history =>            
            <div className="flex items-center mb-4">
                <input id={history.id} key={history.id} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor={history.id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{history.ip}</label>
            </div>
        )
    }

    deleteHistory(){
        
    }

    addIp(event){
        axios.post('/api/history', {params: event.target.value})
    }

    render(){
        if(!this.state.location) return;

        return(
            <div className="row justify-content-center mt-5">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card shadow">
                        <div className="card-title text-center border-bottom">
                            <h2 className="p-3">Your ip address is: { this.state.location['ip'] }</h2>
                            <h2 className="p-3">Your location is in: { this.state.location['city'] }, { this.state.location['region'] }, { this.state.location['country'] }</h2>
                        </div>
                        <div className="card-title text-center border-bottom">
                        <input type="text" className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="add" name="add" onChange={(e) => { this.getIpDetails(e.target.value)}} />
                        <label className="block font-medium text-sm text-gray-700 mt-4 mb-4 text-left">Status: {this.state.err}</label>
                        </div>
                        <MyGoogleMap loc={this.state.location.loc} />
                    </div>
                    { this.getAllIp() }                    
                    <div className="mb-4">
                        <button type="button" onClick={this.deleteHistory()} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-3">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default IpIndex