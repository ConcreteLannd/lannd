import Logo from '../logo/logo';
import Nav from '../navigation/navigation'
import './header.css';

function Header() {
  return (
    <>
        <header className="header">
           <div className='container'>
              <div className='hd-content'>
                <Logo />
                <Nav />
              </div>
           </div>
        </header>
    </>
  );
}

export default Header;
