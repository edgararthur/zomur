import './leftsidebar.css';
import 'boxicons/css/boxicons.min.css';

function MenuItem({ icon, text, link }: { icon: string, text: string, link: string }) {
	return (
		<li>
			<i className={`bx ${icon}`} style={{ fontSize: '18px', fontWeight: '550' }}></i>
			<a href={link}>{text}</a>
		</li>
	);
}

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
						<MenuItem icon='bx-home-alt-2' text='Dashboard' link='' />
						<MenuItem icon='bx-wallet' text='My Wallet' link='' />
						<MenuItem icon='bx-credit-card' text='Transaction' link='' />
						<MenuItem icon='bx-file' text='Order' link='' />
						<MenuItem icon='bx-user-circle' text='Customers' link='' />
						<MenuItem icon='bx-package' text='Products' link='' />
						<MenuItem icon='bx-message-rounded-detail' text='Inbox' link='' />
						<MenuItem icon='bx-bell' text='Notifications' link='' />
						<MenuItem icon='bx-user' text='User' link='' />
						<MenuItem icon='bx-history' text='History' link='' />
					</ul>
				</div>
				<div className="leftbar__help">
					<p>Help</p>
					<ul>
						<MenuItem icon='bx-support' text='Support' link='' />
						<MenuItem icon='bx-cog' text='Setting' link='' />
						<MenuItem icon='bx-log-out' text='Logout' link='' />
					</ul>
				</div>
			</div>
		</div>
  );
}

export default LeftSidebar;
