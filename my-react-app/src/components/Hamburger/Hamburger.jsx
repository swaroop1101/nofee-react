import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { useEffect } from 'react';

function Hamburger(){

    const [opened, { toggle }] = useDisclosure();

    useEffect(() => {
        if (opened) {
          document.body.style.overflow = 'hidden'; // Disable scrolling when menu is open
        } else {
          document.body.style.overflow = 'auto'; // Re-enable scrolling when menu is closed
        }
    
        return () => {
          document.body.style.overflow = 'auto'; // Clean up when component is unmounted
        };
      }, [opened]);

    return(
        <>
        <div className='lg:hidden'>
            <Burger size="md" opened={opened} onClick={toggle} aria-label="Toggle navigation"/>
        </div>

        {opened && (
            <div className="fixed top-16 left-0 w-full bg-[#312d2d] text-white z-40 flex flex-col text-3xl space-y-5
           opacity-100 translate-y-0 sm:top-13 h-full "
           >
            <a href=''>Home</a>
            <a href=''>Explore</a>
            <a href=''>Language</a>
            <a href=''>Login</a>
            <a href=''>Signup</a>
            </div>
        )
        }
        </>
    )
}
export default Hamburger;