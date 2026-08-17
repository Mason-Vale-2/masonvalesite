import React, { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import { Send } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Home } from 'lucide-react';

interface MenuItemProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, children, className }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-row items-center gap-3 w-full p-8 text-xl font-semibold bg-gold-500 hover:bg-gold-600 rounded-full transition-colors duration-300 shadow-lg z-50`}
    >
        {children}
    </a>
);

interface BrochureMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const BrochureMenu: React.FC<BrochureMenuProps> = ({ isOpen, onClose }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    if (!isOpen) return null;

    const phoneNumber = '07515653418';
    const whatsappNumber = `340${phoneNumber}`;
    const email = 'enquiries@mason-vale.com';
    const websiteUrl = '/';

    return (
        <div ref={menuRef} className="fixed inset-0 z-[60] flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Menu */}
            <div className="relative z-10 flex flex-col gap-6">
                <MenuItem className="" href={`tel:${phoneNumber}`}>
                    <Phone size={28} />
                    <span className="text-xl">Call Us</span>
                </MenuItem>
                <MenuItem href={`https://wa.me/${whatsappNumber}`}>
                    <Send size={28} />
                    <span className="text-xl">WhatsApp</span>
                </MenuItem>
                <MenuItem href={`mailto:${email}`}>
                    <Mail size={28} />
                    <span className="text-xl">Email</span>
                </MenuItem>
                <MenuItem href={websiteUrl}>
                    <Home size={28} />
                    <span className="text-xl">Visit Site</span>
                </MenuItem>
            </div>
        </div>
    );
};

export default BrochureMenu;