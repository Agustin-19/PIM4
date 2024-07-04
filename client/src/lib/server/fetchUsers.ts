import { LoginFormData, LoginResponse, RegisterForm } from "@/interfaces/auth.interface";

const API = 'https://pim4.onrender.com/'


export const fetchRegisterUser = async (formData: RegisterForm): Promise<string | null> => {
    const { confirmPassword, ...dataToSend } = formData;

    try {
        const response = await fetch(`${API}users/register`, {
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


export const fetchLoginUser = async (formData: LoginFormData): Promise<LoginResponse> => {
    try {
        const response = await fetch(`${API}users/login`, {
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

            typeof window !== "undefined" && localStorage.setItem('token', token); 
            typeof window !== "undefined" && localStorage.setItem('user', JSON.stringify(user));
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


export const getUserOrders = async ( token: string) =>{
    const response = await fetch(`${API}users/orders`, {
        headers: {
            'Authorization': `${token}`
        }
    });
    const data = await response.json();
    // console.log(data);
    
    return data;
}