import { Component } from "react"
import MyGoogleMap from './MyGoogleMap'

const apiKey = 'AIzaSyCfX_eyHKwi_nMFByftBWPmkg4gYjPpdio';
// Set default map settings

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
        }
    }
    
    componentDidMount(){
        this.getIpAddress()
        this.fetchHistory()
    }

    getIpAddress(){
        fetch('https://ipinfo.io/json?token=b2bd403095e7ec')
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

    fetchHistory(){
        axios.get('/api/history')
            .then(response=> this.setState({histories:response.data}))
    }

    getAllIp(){
        return this.state.histories.map(history =>            
            <div className="flex items-center mb-4">
                <input id={history.id} key={history.id} type="checkbox" value={history.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor={history.id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{history.ip}</label>
            </div>
        )
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
                        <MyGoogleMap loc={this.state.location.loc} />
                    </div>
                    { this.getAllIp() }
                </div>
            </div>
        )
    }
}

export default IpIndex