import Model from './components/Model';

const App = () => {
return(
  <div className='overflow-x-hidden'>
    <div className='fixed z-10 h-screen w-full top-0 hidden lg:block'>
      <Model/>
    </div>
    <div className='text-6xl bg-red-100 h-screen section-1'>
      Hey, I am Akshay
    </div>
    <div className='text-6xl bg-red-100 h-screen section-2'>
      Hey, I am Akshay
    </div>
    <div className='text-6xl bg-red-100 h-screen section-3'>
      Hey, I am Akshay
    </div>
  </div>
)
}
 
export default App;