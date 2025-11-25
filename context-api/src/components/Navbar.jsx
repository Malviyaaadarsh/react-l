
import Navbar2 from './Navbar2'
import { useContext } from 'react';
import { ThemeDataCtx } from '../context/ThemeCtx';

const Navbar = () => {
   const [Theme] = useContext(ThemeDataCtx)
   
  return (
    <div className={Theme}>
      <h2>Aari</h2>
      {/* {props.children[0]} */}
         <Navbar2  />
         
    </div>
  )
}

export default Navbar
