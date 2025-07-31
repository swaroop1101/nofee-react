function Mern() {

  function thapatechnical(){
    window.open(`${window.location.origin}/Mern/thapatechnical`, '_blank');
  }

  function sheryians(){
    window.open(`${window.location.origin}/Mern/sheryians`, '_blank');
  }

  function intellipaat(){
    window.open(`${window.location.origin}/Mern/intellipaat`, '_blank');
  }

    return (
      <>
      <h1 className="text-2xl font-bold text-blue-800 sm:ml-40 sm:mt-10 sm:mb-4 sm:text-2xl sm:font-bold sm:text-blue-800 ml-10 mt-10 mb-4">
        Channels for Mern
      </h1>
     
  
  
  
      <div className="flex justify-center sm:mt-10 mb-10 mx-5">
  <div className="sm:borderl  w-300  border rounded bg-blue-100 p-4">
    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
      
      
      <div className="h-[130px] w-[150px] sm:h-40 sm:w-40 border rounded-md mx-auto sm:mx-0 mb-4 sm:mb-0">
      <img src="/src/components/Courses/Channels/Mern/Thapa Technical.jpg" className='w-full h-full object-cover'></img>

      </div>
  
      
      <div className="flex flex-col sm:w-full">
        
        
        <p className="text-lg font-semibold text-center sm:text-left sm:mt-0 mt-2">Thapa Technical</p>
        
        <h6 className="text-sm text-gray-700 text-center sm:text-left mt-1">Description</h6>
  
        <p className="text-sm text-gray-700 text-center sm:text-left mt-1">
        Welcome Guys, This channel is all about Website Development, Technical, Tips and Tricks, 
        Designs Principle and Programming videos in the Hindi Language.</p>
  
        <div className="flex justify-center sm:justify-start">
          <button 
          onClick={thapatechnical}
          className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  
  
    <div className="flex justify-end mt-4">
      <a
        href="https://www.chaicode.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-700 underline hover:text-blue-900"
      >
        Official Website
      </a>
    </div>
  </div>
  </div>
  
  
  
      <div className="flex justify-center sm:mt-10 mb-10 mx-5">
  <div className="sm:borderl  w-300  border rounded bg-blue-100 p-4">
    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
      
      
      <div className="h-[130px] w-[150px] sm:h-40 sm:w-40 border rounded-md mx-auto sm:mx-0 mb-4 sm:mb-0">
      <img src="/src/components/Courses/Channels/Mern/sheryians.jpeg" className='w-full h-full object-cover'></img>
      </div>
  
      
      <div className="flex flex-col sm:w-full">
        
        
        <p className="text-lg font-semibold text-center sm:text-left sm:mt-0 mt-2">Sheryians Coding School</p>
        
        <h6 className="text-sm text-gray-700 text-center sm:text-left mt-1">Description</h6>
  
        <p className="text-sm text-gray-700 text-center sm:text-left mt-1">
        The Sheryians Coding School is a step towards helping our Indian audience to learn modern design and coding practices.</p>
  
        <div className="flex justify-center sm:justify-start">
          <button 
          onClick={sheryians}
          className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  
  
    <div className="flex justify-end mt-4">
      <a
        href="https://sheryians.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-700 underline hover:text-blue-900"
      >
        Official Website
      </a>
    </div>
  </div>
  </div>
  
  
  <div className="flex justify-center sm:mt-10 mb-10 mx-5">
  <div className="sm:borderl  w-300  border rounded bg-blue-100 p-4">
    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
      
      
      <div className="h-[130px] w-[150px] sm:h-40 sm:w-40 border rounded-md mx-auto sm:mx-0 mb-4 sm:mb-0">
      <img src="/src/components/Courses/Channels/Mern/IntelliPaat.jpg" className='w-full h-full object-contain'></img>
      </div>
  
      
      <div className="flex flex-col sm:w-full">
        
        
        <p className="text-lg font-semibold text-center sm:text-left sm:mt-0 mt-2">IntelliPaat</p>
        
        <h6 className="text-sm text-gray-700 text-center sm:text-left mt-1">Description</h6>
  
        <p className="text-sm text-gray-700 text-center sm:text-left mt-1">
        Intellipaat offers industry-designed online certification courses in 150+ technologies, 
        helping professionals and corporates upskill through expert training, hands-on projects, progress tracking, and globally recognized certifications.</p>
  
        <div className="flex justify-center sm:justify-start">
          <button 
          onClick={intellipaat}
          className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  
  
    <div className="flex justify-end mt-4">
      <a
        href="https://www.simplilearn.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-700 underline hover:text-blue-900"
      >
        Official Website
      </a>
    </div>
  </div>
  </div>
      </>
    );
  }
  
  export default Mern;