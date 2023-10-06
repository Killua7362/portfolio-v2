import Model from './components/Model';

const App = () => {
return(
  <div>
    <div className='fixed h-screen w-full'>
      <Model/>
    </div>
    <div className='text-6xl h-screen section-1 bg-green-100'>
    </div>
    <div className='text-6xl h-screen section-2'>
      Hey, I am Akshay
    </div>
    <div className='text-6xl h-screen section-3 z-50'>
        <div className='relative z-0 h-screen w-8/12 bg-white m-3 mx-5'>
        </div>
    </div>
  </div>
)
}
 
export default App;