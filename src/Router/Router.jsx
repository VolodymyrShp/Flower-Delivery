import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Category from '../pages/Category/Category'
import Checkout from '../pages/Checkout/Checkout'
import Product from '../pages/Product/Product'
import SignIn from '../pages/SignIn/SignIn'
import Subscription from '../pages/Subscription/Subscription'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<AboutUs />} path='/about-us' />
				<Route element={<Category />} path='/category' />
				<Route element={<Checkout />} path='/checkout' />
				<Route element={<Product />} path='/product' />
				<Route element={<SignIn />} path='/signin' />
				<Route element={<Subscription />} path='/subscription' />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
