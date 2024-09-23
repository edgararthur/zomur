import './header.css'

function Header() {
	return (
		<div className="header__container">
			<div className="header__card">
				<div className="header__title">
					<h1>Dashboard</h1>
					<p>Let's check your store today</p>
				</div>
				<div className="header__contents">
					<div className="search">
						<i className="bx bx-search-alt-2"></i>
						<input type="search" name="search" placeholder='Search Dashboard...' id="" />
						<i className='bx bx-slider-alt'></i>
					</div>
					<div className="header__actions">
						<i className='bx bx-chat' style={{ fontSize: '18px' }}></i>
						<i className='bx bx-bell' style={{ fontSize: '18px' }}></i>
						<i className='bx bx-cog' style={{ fontSize: '18px' }}></i>
					</div>
					<div className="profile">
						<img src="" alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header