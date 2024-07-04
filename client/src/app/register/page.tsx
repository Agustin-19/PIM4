'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { RegisterErrors, RegisterForm } from '@/interfaces/auth.interface';
import { validateForm } from '@/helpers/validation.helpers';
import { fetchRegisterUser } from '@/lib/server/fetchUsers';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [formData, setFormData] = useState<RegisterForm>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phone: '',
    });
    const [errors, setErrors] = useState<RegisterErrors>({});
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationErrors = validateForm(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage(null);
        } else {
            const message = await fetchRegisterUser(formData);
            if (message) {
                setSuccessMessage(message);
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    address: '',
                    phone: '',
                });
                setErrors({});
            } else {
                setSuccessMessage(null);
            }
            router.push('/login');
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
            <h1>Registro</h1>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <form onSubmit={handleSubmit} className='text-black'>
                <label className="m-2 daisy-input daisy-input-bordered flex daisy-items-center gap-2">
                    <input
                        type="text"
                        className="grow border-none"
                        placeholder="Nombre de usuario"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </label>
                {errors.name && <p className="error-text">{errors.name}</p>}

                <label className="m-2 daisy-input daisy-input-bordered flex daisy-items-center gap-2">
                    <input
                        type="email"
                        className="grow border-none"
                        placeholder="Email"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                {errors.email && <p className="error-text">{errors.email}</p>}

                <label className="m-2 daisy-input daisy-input-bordered flex items-center gap-2">
                    <input
                        type="password"
                        className="grow border-none"
                        placeholder="Contraseña"
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                {errors.password && <p className="error-text">{errors.password}</p>}

                <label className="m-2 daisy-input daisy-input-bordered flex items-center gap-2">
                    <input
                        type="password"
                        className="grow border-none"
                        placeholder="Confirmar contraseña"
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </label>
                {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

                <label className="m-2 daisy-input daisy-input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow border-none"
                        placeholder="Dirección"
                        name='address'
                        value={formData.address}
                        onChange={handleChange}
                    />
                </label>
                {errors.address && <p className="error-text">{errors.address}</p>}

                <label className="m-2 daisy-input daisy-input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow border-none"
                        placeholder="Teléfono"
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </label>
                {errors.phone && <p className="error-text">{errors.phone}</p>}

                <button type="submit" className="m-1 daisy-btn daisy-btn-primary">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
