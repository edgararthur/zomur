import './leftsidebar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse } from '@fortawesome/free-solid-svg-icons';

import 'boxicons/css/boxicons.min.css';

function LeftSidebar() {
  return (
    <div className='leftbar__container'>
        <div className="leftbar__card">
            <div className="logo">
                <img src="src/assets/logo.png" alt="" />
            </div>
            <div className="leftbar__menu">
                <p>Menu</p>
                <ul>
                    <li>
                        <i className='bx bx-home-alt-2' style={{ fontSize: '18px', fontWeight: '550' }}></i>
                        <a href="">Dashboard</a>
                    </li>
                    <li>
                        <i className='bx bx-wallet' style={{ fontSize: '18px', fontWeight: '550' }}></i>
                        <a href="">My Wallet</a>
                    </li>
                    <li>
                        <i className='bx bx-credit-card' style={{ fontSize: '18px', fontWeight: '550' }}></i>
                        <a href="">Transaction</a>
                    </li>
                    <li>
                        <i className='bx bx-file' style={{ fontSize: '18px', fontWeight: '550' }}></i>
                        <a href="">Order</a>
                    </li>
                    <li>
                        <i className='bx bx-user-circle' style={{ fontSize: '18px', fontWeight: '550' }}></i>
                        <a href="">Customers</a>
                    </li>
                    <li>
                        <i className='bx bx-package' style={{ fontSize: '18px', fontWeight: '550' }}></i>
                        <a href="">Products</a>
                    </li>
                    <li>
                        <i className='bx bx-message-rounded-detail' style={{ fontSize: '18px', fontWeight: '550' }}></i>
                        <a href="">Inbox</a>
                    </li>
                    <li>
                        <i className='bx bx-bell' style={{ fontSize: '18px', fontWeight: '550' }}></i>
                        <a href="">Notifications</a>
                    </li>
                    <li>
                        <i className='bx bx-user' style={{ fontSize: '18px', fontWeight: '550' }}></i>
                        <a href="">User</a>
                    </li>
                    <li>
                        <i className='bx bx-history' style={{ fontSize: '18px', fontWeight: '550' }}></i>
                        <a href="">History</a>
                    </li>
                </ul>
            </div>
            <div className="leftbar__help">
                <p>Help</p>
                <ul>
                    <li>
                        <i className='bx bx-support' ></i>
                        <a href="">Support</a>
                    </li>
                    <li>
                        <i className='bx bx-cog' ></i>
                        <a href="">Setting</a>
                    </li>
                    <li>
                        <i className='bx bx-log-out' ></i>
                        <a href="">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default LeftSidebar