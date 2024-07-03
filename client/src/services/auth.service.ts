import { LoginFormData, LoginResponse, RegisterForm } from "@/interfaces/auth.interface";

const API_URL = 'http://localhost:3001/';

export const registerUser = async (formData: RegisterForm): Promise<string | null> => {
    const { confirmPassword, ...dataToSend } = formData;

    try {
        const response = await fetch(`${API_URL}users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
            return 'Registro exitoso';
        } else {
            const data = await response.json();
            throw new Error(data.message || 'Error en el registro');
        }
    } catch (error) {
        console.error('Error en el registro:', error);
        return null;
    }
};

// User Login
export const loginUser = async (formData: LoginFormData): Promise<LoginResponse> => {
    try {
        const response = await fetch(`${API_URL}users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token; 
            const user = data.user;

            localStorage.setItem('token', token); 
            localStorage.setItem('user', JSON.stringify(user));
            return { token, user, message: 'Login successful' };
        } else {
            const data = await response.json();
            throw new Error(data.message || 'Error en el inicio de sesión');
        }
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        return { token: '', user: null, message: 'Error during login' };
    }
};

