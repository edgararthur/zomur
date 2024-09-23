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
						<input type="search" name="search" placeholder='Search Dashboard' id="" />
					</div>
					<div className="header__actions">
						<i className="fas fa-message"></i>
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