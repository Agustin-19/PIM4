import { RegisterForm, RegisterErrors,LoginErrors, LoginFormData } from '@/interfaces/auth.interface';



export const validateForm = (formData: RegisterForm): RegisterErrors => {
    const errors: RegisterErrors = {};

    if (!formData.name) {
        errors.name = 'Nombre de usuario es requerido';
    }
    // Validar el email con una expresión regular
    if (!formData.email) {
        errors.email = 'Email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email no es válido';
    }
    // Validar la longitud de la contraseña
    if (!formData.password) {
        errors.password = 'Contraseña es requerida';
    } else if (formData.password.length < 6) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    // Validar que las contraseñas coincidan
    if (!formData.confirmPassword) {
        errors.confirmPassword = 'Confirmar contraseña es requerido';
    } else if (formData.confirmPassword !== formData.password) {
        errors.confirmPassword = 'Las contraseñas no coinciden';
    }
    // Validar que la dirección esté presente
    if (!formData.address) {
        errors.address = 'Dirección es requerida';
    }
    // Validar el formato del número de teléfono
    if (!formData.phone) {
        errors.phone = 'Teléfono es requerido';
    } else if (!/^\d{10}$/.test(formData.phone)) {
        errors.phone = 'Teléfono no es válido, debe tener 10 dígitos';
    }

    return errors;
};

// ***** Login Helper ****


export const validateLoginForm = (formData: LoginFormData): LoginErrors => {
    const errors: LoginErrors = {};

    if (!formData.email) {
        errors.email = 'Email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email no es válido';
    }

    if (!formData.password) {
        errors.password = 'Contraseña es requerida';
    }

    return errors;
};
