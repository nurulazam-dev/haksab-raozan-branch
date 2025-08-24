import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/authSlice';
import AuthLayout from '../../layouts/AuthLayout';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await dispatch(login({ email, password })).unwrap();
            navigate('/dashboard'); // Redirect to dashboard on successful login
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <AuthLayout>
            <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit} className="w-80">
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border rounded w-full py-2 px-3"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border rounded w-full py-2 px-3"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white rounded py-2 px-4 w-full">
                        Login
                    </button>
                </form>
            </div>
        </AuthLayout>
    );
};

export default Login;