import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MdArrowBackIos } from 'react-icons/md'

function NavBarBack(props) {
  return (
    <nav className={props.color}>
        <div className="container-fluid">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link type="button" className="btn btn-outline-primary me-md-2" to={-1}><MdArrowBackIos color={props.colorIcon}/></Link>
          </div>
        </div>
      </nav>
  );
}

export default  NavBarBack;