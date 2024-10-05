import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { error } from "laravel-mix/src/Log";

function App(){

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/user')
            .catch(error => {
                if(error.response.status === 401) navigate('login')
            })
    })

    const logout = (event) => {
        axios.post('/api/logout')
            .then(response=>navigate('login'))
    }

    return(
             <div className="min-h-screen bg-gray-100">
                <nav className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    <NavLink to="/ip">
                                        Jlabs
                                    </NavLink>
                                </div>

                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink to="/ip"
                                        className={({ isActive }) => isActive ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}>Ip Address</NavLink>
                                </div>
                            </div>
                            <div className="flex items-center ml-6">
                                <div className="ml-3 realative">
                                    <button type="button" onClick={logout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <main>
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 bg-white border-b border-gray-200">
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    )
}

export default App;