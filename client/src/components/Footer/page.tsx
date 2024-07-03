// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer
            className="daisy-footer daisy-footer-center border-t-2 border-color mt-auto p-4">
            <aside>
                <p className="text-sm">
                    Copyright © {currentYear} - Todos los derechos reservados para{' '}
                    <span className="font-semibold">Olga Store</span>. Agradecemos tu apoyo y confianza en nuestros productos y servicios.
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
