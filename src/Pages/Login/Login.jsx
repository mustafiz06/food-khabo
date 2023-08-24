
import { Link } from 'react-router-dom';
import imgBg from '../../assets/assets/others/authentication.png'
import img from '../../assets/assets/others/authentication2.png'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {
    
    return (
        <div style={{ backgroundImage: `url(${imgBg})` }}>
                <title>Bistro Boss | Login</title>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 md:w-1/2 pt-10">
                        <h1 className="text-4xl font-bold text-center">Login</h1>
                        <form className="card-body">
                        {/* <form onSubmit={handleLogin} className="card-body"> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="example@email.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="Enter your password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text"
                                    name="captcha"
                                    placeholder="type the captcha above" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054] border-none" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-[#D1A054] pb-4 text-center text-xl'>New here? <Link to='/signUp'>Create a New Account</Link></p>
                        <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;