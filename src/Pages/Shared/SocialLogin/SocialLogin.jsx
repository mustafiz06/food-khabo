import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <div className="divider">OR Sign Up With</div>
            <div className="flex justify-center items-center gap-6 py-4">
                <button className="btn btn-circle btn-outline text-2xl">
                    <FaFacebook />
                </button>
                <button className="btn btn-circle btn-outline text-2xl">
                    <FaGoogle />
                </button>
                <button className="btn btn-circle btn-outline text-2xl">
                    <FaGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;