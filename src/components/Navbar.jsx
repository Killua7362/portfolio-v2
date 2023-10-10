const NavBar = () => {
    return ( 
        <div className='fixed w-full h-16 z-10'>
        <div className='w-6/12 h-full bg-white mx-auto rounded-xl mt-2 navbar opacity-0 border-solid border-black border-2 flex justify-end gap-4 items-center pr-4'>
          <div>
            Projects
          </div>
          <div>
            Blog
          </div>
        </div>
      </div>

     );
}
 
export default NavBar;