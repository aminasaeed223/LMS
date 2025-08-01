import React from 'react';
import Link from 'next/link'; // Ensure you import Link from next/link
import Image from 'next/image'; // Ensure you import Image from next/image
import Navitems from "./Navitems"
import { SignInButton,  SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg" 
            alt="logo"
            width={46}
            height={44}
          />
        </div>
      </Link>
      <div className='flex items-center gap-8'>
        <Navitems />
        <SignedOut>

            <div className="flex items-center gap-2">
                <SignInButton>

                    <button className="btn-signin">Sign In</button>
                </SignInButton>
            </div>
        </SignedOut>
        <SignedIn>
               <UserButton />
        </SignedIn>
        <p>Sign in</p>
      </div>
    </nav>
  );
}

export default Navbar;