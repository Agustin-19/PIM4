"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { LoginErrors, LoginFormData } from '@/interfaces/auth.interface';
import { validateLoginForm } from '@/helpers/validation.helpers';
import { fetchLoginUser } from '@/lib/server/fetchUsers';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<LoginErrors>({});
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const { setToken, setUser } = useAuth();
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationErrors = validateLoginForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage(null);
        } else {
            const { token, user, message } = await fetchLoginUser(formData);
            if (message === 'Login successful') {
                setSuccessMessage(message);
                if (token && user) {
                    setToken(token);
                    setUser(user);
                }
                setFormData({
                    email: '',
                    password: '',
                });
                setErrors({});
                router.push('/home');
            } else {
                setSuccessMessage(null);
            }
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name in errors) {
            setErrors({ ...errors, [name]: undefined });
        }
    
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit} className='text-black'>
                <label className="m-2 daisy-input daisy-input-bordered flex daisy-items-center gap-2">
                    <input
                        type="text"
                        className="grow border-none"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                {errors.email && <p className="error-text">{errors.email}</p>}

                <label className="m-2 daisy-input daisy-input-bordered flex daisy-items-center gap-2">
                    <input
                        type="password"
                        className="grow border-none"
                        placeholder="Contraseña"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                {errors.password && <p className="error-text">{errors.password}</p>}

                <button type="submit" className="m-2 daisy-btn daisy-btn-primary">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;