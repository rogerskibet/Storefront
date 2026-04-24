import { useState } from "react";

function Login({setUser}){
    const[username,setUsername] = useState("");

    const handleLogin = () => {
        localStorage.setItem("user",username);
        setUser(username);
    };

    return (
         <div className="flex flex-col items-center gap-3 mt-20">
            <h2 className="text-xl font-bold">Demo Login</h2>

            <input
                className="border px-3 py-2 rounded"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleLogin}
            >
                Login
            </button>
    </div>
    );
}

export  default Login;