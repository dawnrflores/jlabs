
import { Component } from "react"

class App extends Component{

    render(){
        <form onSubmit={this.Login}>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card shadow">
                    <div className="card-title text-center border-bottom">
                        <h2 className="p-3">Login</h2>
                    </div>
                    <div className="card-body">
                        <div className="mb-4">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" name="email" v-model="email"/>
                            <small v-if="errors?.email" className="text-danger"> { errors.email[0] } </small>
                        </div>
                        <div class="mb-4">
                            <label for="password" className="form-label">Password</label>
                            <input className="form-control" name="password" type="password" v-model="password" />
                        </div>
                        <div className="mb-4 form-check">
                            <input className="form-check-input" name="remember" type="checkbox" v-model="remember" id="remember" />
                            <label className="form-check-label" for="remember">
                            Remember me
                            </label>
                        </div>
                        <div className="mb-4" v-if="errors?.length">
                            <span className="text-danger fw-bold"> { errors } </span>
                        </div>
                        <div className="mb-4">
                            <button type="button" className="btn text-light btn-primary w-100">Login</button>
                        </div>
                        <div className="mb-2">
                            Register new <a href="/register">account here</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </form>
    }
}

export default App