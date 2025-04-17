function Aboutus(){
    return(
        <>
            <div className='justify-items-center p-6'>
                <h1 className='text-4xl font-bold'>About Us</h1>
                <div className='text-2xl font-thin justify-items-center p-6'>
                    <p>Welcome to PrepVio, where learning has no limits !</p>
                    <p>We provide highr-quality and career-focused platform to prepare for your interviews.</p>
                    <p>Analyse & upgrade their skills and achieve their goals.</p>
                </div>
            </div>
            <div className='py-4 px-30'>
                <h1 className='text-4xl font-extrabold mb-9 text-center font-family'>Why Choose Us?</h1>
                <div className='flex justify-between'>
                    <div className='h-66 w-72 border rounded-2xl shadow-lg px-2 py-7 text-center'>
                        <h2 className='font-thin text-3xl/8 mb-5 underline decoration-1 underline-offset-4'>Real-Time AI Avatar</h2>
                        <p className='text-xl/6'>Experience human-like interviews with our interactive AI avatar, 
                        making the process natural and engaging.</p>
                    </div>

                    <div className='h-66 w-72 border rounded-2xl shadow-lg px-2 py-7 text-center'>
                        <h2 className='font-thin text-3xl mb-3 underline decoration-1 underline-offset-4'>AI-Powered Analysis</h2>
                        <p className='text-xl/6'>Our AI evaluates speech clarity, sentiment, confidence, and relevence, 
                        providing deep performance insights.</p>
                    </div>

                    <div className='h-66 w-72 border rounded-2xl shadow-lg px-4 py-7 text-center'>
                        <h2 className='font-thin text-3xl mb-3 underline decoration-1 underline-offset-4'>Automated <br/>Report</h2>
                        <p className='text-xl/6'>Get detailed AI-driven feedback on strengths, weaknesses, and improvement areas instantly.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus;