import logo from '../../images/logo.svg';
import './logo.css';

function Logo() {
  return (
    <>
        <h1 className='logo'><img src={logo} className="App-logo" alt="logo" /></h1>
    </>
  );
}

export default Logo;
