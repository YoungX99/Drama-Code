import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
	return (
		<div className='h-screen bg-gray-50 flex flex-col'>
			{/* Header */}
			<header className='bg-white shadow-sm border-b flex-shrink-0'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<div className='flex items-center'>
							<Link to='/' className='text-xl font-bold text-gray-900'>
								Drama Code
							</Link>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className='flex-1 px-4 sm:px-6 lg:px-8 py-8 overflow-auto'>
				<Outlet />
			</main>

			{/* Footer */}
			<footer className='bg-white border-t flex-shrink-0'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
					<p className='text-center text-sm text-gray-600'>
						© 2025 Drama Code. All rights reserved. ❤️
					</p>
				</div>
			</footer>
		</div>
	)
}

export default Layout
