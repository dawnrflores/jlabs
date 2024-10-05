
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const LoginUser = (event) => {
        event.preventDefault();
        axios.post('/api/login', {email: email, password: password})
            .then(response=>navigate('/ip'));
    }


    return(
        <form onSubmit={LoginUser}>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div className="card-title text-center border-bottom">
                    <h2 className="p-3">Login</h2>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium text-sm text-gray-700">Email</label>
                    <input type="text" className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="email" name="email" onChange={(e) => { setEmail(e.target.value)}} value={email} />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-medium text-sm text-gray-700">Password</label>
                    <input className="block mt-1 w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="password" type="password"  onChange={(e) => { setPassword(e.target.value)}} value={password} />
                </div>
                <div className="mb-4">
                    <button type="submit" className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 ml-3">Login</button>
                </div>
            </div>
        </form>
    )        
    
}