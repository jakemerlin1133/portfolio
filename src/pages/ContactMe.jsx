import React from 'react'
import Wallpaper1 from "../assets/black-wallpaper1.jpg";
import { Contact } from '../components/Contact';
import { CopyrightFooter } from '../components/CopyrightFooter';

export const ContactMe = () => {
  return (
    <div className="z-[1] h-full w-full"
    style={{
      background: `url(${Wallpaper1})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>


<Contact/>
<CopyrightFooter/>
    </div>
  )
}
