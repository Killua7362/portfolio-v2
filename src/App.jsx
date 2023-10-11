import { BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css'
import 'react-vertical-timeline-component/style.min.css';
import BasePage from './components/BasePage';
import ProjectPage from './components/AllProjects';


const App = () => {
return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasePage/>}/>
      </Routes>
      <Routes>
        <Route path='/projects' element={<ProjectPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
)
}

export default App;
