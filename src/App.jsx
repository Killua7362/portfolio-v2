import Model from './components/Model';

const App = () => {
return(
  <div>
    <div className='fixed h-screen w-full overflow-hidden'>
      <Model/>
    </div>
    <div className='text-6xl h-screen relative z-0 justify-center items-center flex'>
        Welcome
    </div>
    <div className='text-6xl h-screen section-1'>
    </div>
    <div className='text-6xl h-screen section-2'>
      Hey, I am Akshay
    </div>
    <div className='text-6xl h-screen section-3 z-50'>
    </div>
  </div>
)
}
 
export default App;