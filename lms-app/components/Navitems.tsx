'use client';
import Link from "next/link"; // Corrected import
import { usePathname } from "next/navigation"; // Correctly importing usePathname
import { cn } from "../lib/utilis"; 
import React from 'react';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
];

const Navitems = () => {
    const pathname = usePathname(); // Call the function correctly

    return (
        <nav className="flex items-center gap-4">
            {
                navItems.map(({ label, href }) => (
                    <Link
                        href={href}
                        key={label}
                        className={cn(pathname === href ? 'text-primary font-semibold' : '')} // Conditional class
                    >
                        {label}
                    </Link>
                ))
            }
        </nav>
    );
}

export default Navitems;