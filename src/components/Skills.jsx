const Skills = () => {
    return (
          <div className='grid grid-cols-10 gap-y-4 '>
              <div className='text-xl col-span-2'>
                Libraries
              </div>              
              <div className='text-lg col-span-8 '>
              Pytorch,Tensorflow,Jax,scikit-learn,pandas,NumPy,matplotlib
              </div>   
              <div className='text-xl col-span-2'>
              Technologies
              </div>              
              <div className='text-lg col-span-8 '>
              Git,Linux/Unix,Vim
                            </div>     
              <div className='text-xl col-span-2'>
              Languages
              </div>              
              <div className='text-lg col-span-8 '>
              Python,JavaScript,SQL,HTML/CSS,C++
              </div>     
              <div className='text-xl col-span-2'>
              Web Dev
              </div>              
              <div className='text-lg col-span-8 '>
              React,Nodejs,Express,Mongodb
              </div>                
          </div>
      );
}
 
export default Skills;