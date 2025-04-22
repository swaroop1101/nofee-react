import { TfiAlignJustify } from "react-icons/tfi";
function Navbar() {
    return (
      <>
        {/* <div className='h-13 bg-white shadow-md content-center'>
        <div className='px-21 flex flex-row content-center'>
          <div class='Logo' className='flex flex-row items-center gap-3'>
            <img 
              className='w-18 h-10 rounded-lg'
              src="./src/logo.jpg"
              alt="LOGO"
            />
            <h1 className='font-bold text-xl'>PrepVio</h1>
          </div>

          <div class='explore-btn content-center ps-18 px-10'>
            <button class='border rounded-full text-center px-3 text-lg flex items-center gap-2'>
              <span>Explore</span>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="3" 
              stroke="currentColor" 
              class="size-3"
              >
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="m19.5 8.25-7.5 7.5-7.5-7.5" 
                />
              </svg>

            </button>
          </div>

          <div class='search-btn content-center'>
            <button class='border rounded-full text-lg w-98 text-left px-8 flex items-center justify-between'>
              <span>What you want to learn..?</span>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="2.5" 
              stroke="currentColor" 
              class="size-5"
              >
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
                />
              </svg>

            </button>
            
          </div>

          <div class='language-btn content-center px-14'>
            <button class='border rounded-full text-center px-4 text-lg flex items-center justify-between gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="2" 
            stroke="currentColor" 
            class="size-5"
            >
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
              <span>language</span>
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke-width="3" 
              stroke="currentColor" 
              class="size-3"
              >
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                d="m19.5 8.25-7.5 7.5-7.5-7.5" 
                />
            </svg>

            </button>
          </div>

          <div class='signup-btn content-center'>
            <button class='border rounded-full text-center px-4 text-lg'>SignUp</button>
          </div>

          <div class='login-btn content-center px-2'>
            <button class='border rounded-full text-center px-6 text-lg'>Login</button>
          </div>

        </div>
        </div> */}

        <div className='h-13 bg-[#e6e6e6] shadow-md content-center'>
                <div className='w-full px-4 flex items-center justify-between lg:px-21 '>
                  <div class='Logo' className='flex flex-row items-center gap-3'>
                    <img 
                      className='h-10 rounded-lg'
                      src="./src/logo.jpg"
                      alt="LOGO"
                    />
                    <h1 className='font-bold text-xl'>PrepVio</h1>
                  </div>
                  <div class='lg:hidden'>
                    <TfiAlignJustify className='text-xl'/>
                  </div>
        
                  <div class='explore-btn hidden lg:block content-center ps-18 px-10 xl:block ps-20 px-12'>
                    <button class='border rounded-full text-center px-3 text-lg flex items-center gap-2'>
                      <span>Explore</span>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="3" 
                      stroke="currentColor" 
                      class="size-3"
                      >
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="m19.5 8.25-7.5 7.5-7.5-7.5" 
                        />
                      </svg>
        
                    </button>
                  </div>
        
                  <div class='search-btn hidden lg:block content-center'>
                    <button class='border rounded-full text-lg w-98 text-left px-8 flex items-center justify-between'>
                      <span>What you want to learn..?</span>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="2.5" 
                      stroke="currentColor" 
                      class="size-5"
                      >
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
                        />
                      </svg>
        
                    </button>
                    
                  </div> 
        
                  <div class='language-btn hidden lg:block content-center px-14'>
                    <button class='border rounded-full text-center px-4 text-lg flex items-center justify-between gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke-width="2" 
                    stroke="currentColor" 
                    class="size-5"
                    >
                      <path stroke-linecap="round" 
                      stroke-linejoin="round" 
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                      <span>language</span>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="3" 
                      stroke="currentColor" 
                      class="size-3"
                      >
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="m19.5 8.25-7.5 7.5-7.5-7.5" 
                        />
                    </svg>
        
                    </button>
                  </div>
        
                  <div class='signup-btn hidden lg:block content-center'>
                    <button class='border rounded-full text-center px-4 text-lg'>SignUp</button>
                  </div>
        
                  <div class='login-btn hidden lg:block content-center px-2'>
                    <button class='border rounded-full text-center px-6 text-lg'>Login</button>
                  </div>  
        
                </div>
        </div> 

        
      </>
    );
  }
  
  export default Navbar;