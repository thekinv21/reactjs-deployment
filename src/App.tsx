import './App.scss'
import nginxLogo from '/nginx.svg'
import ubuntuLogo from '/ubuntu.svg'

function App() {
	return (
		<>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={nginxLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={ubuntuLogo} className='logo react' alt='React logo' />
				</a>
			</div>
			<h1>Deployment Vps Ubuntu 20.04 + Nginx</h1>
			<p className='read-the-docs'>
				Vite project for deploying with VPS and NGINX
			</p>
		</>
	)
}

export default App
