import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';
import {FiLogOut, FiUser} from "react-icons/fi";


import '../Dropdown/button.css'

function ButtonUser(props) {

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic-button" title="Dropdown button" className='dropdown-btn'>
        <div className='btn-profile'>
        {props.nome}
        <FiUser color='#ffc400' size={24}></FiUser>
        </div>
  
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu'>
        <Dropdown.Item href="#/action-1"><li> <Link to="/">Editar Perfil</Link></li></Dropdown.Item>
        <Dropdown.Item href="#/action-1"><li> <Link to="/">Meus Pedidos</Link></li></Dropdown.Item>
        <Dropdown.Item href="#/action-1"><li> <Link to="/"><FiLogOut color='color: #ffc400;'></FiLogOut></Link></li></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ButtonUser;