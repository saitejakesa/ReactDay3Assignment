import {BrowserRouter,Link,Route,Routes,useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import DashboardExplanation from './pages/dashboard_files/DashboardExplanation';
import {Menu} from "antd";
import Buttons from './pages/Interface/Components/Buttons';
import Cards from './pages/Interface/Components/Cards';
import Colors from './pages/Interface/Utilities/Colors';
import Borders from './pages/Interface/Utilities/Borders';
import Annimation from './pages/Interface/Utilities/Annimation';
import Other from './pages/Interface/Utilities/Other';
import Charts from './pages/Addons/Charts';
import Tables from './pages/Addons/Tables';

// import {Card,CardGroup} from 'reactstrap'

export default function App() {
  const navigate=useNavigate();
  <div></div>
  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <Menu style={{width:"150px"}}
      mode="inline"
      onClick={({key})=>{
        navigate(key)
      }} 
      
      items={[
        {label:"Dashboard",key:"/"},
        {label:"Interface",key:"interface",type:"group",children:[{label:"Components",key:"/components",children:[{label:"Buttons",key:"/buttons"},{label:"Cards",key:"/cards"}]},{label:"Utilities",key:"/utilities",children:[{label:"Colors",key:"/colors"},{label:"Borders",key:"/borders"},{label:"Animations",key:"/animations"},{label:"Other",key:"/other"}]}]},
        {label:"Addons",key:"addons",type:"group",children:[{label:"Charts",key:"/charts"},{label:"Tables",key:"/tables"}]}
      ]}></Menu>
      <Content />
    </div>
    );
  }

    function Content(){
      return <div>
        <Routes>
          <Route path="/" element={<DashboardExplanation />}/>
          <Route path="/buttons" element={<Buttons />}></Route>
          <Route path="/cards" element={<Cards />}></Route>
          <Route path="/colors" element={<Colors />}></Route>
          <Route path="/borders" element={<Borders />}></Route>
          <Route path="/animations" element={<Annimation />}></Route>
          <Route path="/other" element={<Other />}></Route>
          <Route path="/charts" element={<Charts />}></Route>
          <Route path="/tables" element={<Tables />}></Route>
        </Routes>
      </div>
    }

    
  //     <div classs="total">
      
  //         <BrowserRouter>
  //         <Navbar>
  //           <Link to="/">DashboardExplanation</Link>
  //           <Link to ="/operations">CrudOperations</Link>
  //           <Routes>
  //             <Route exact path = "/" element={<DashboardExplanation />}></Route>
  //             <Route exact path = "/operations" element={<CrudOperations />}></Route>
  //             <Route path='/'></Route>
  //           </Routes>
  //           </Navbar>
  //         </BrowserRouter>
          
  //         </div>
          
          
          
  