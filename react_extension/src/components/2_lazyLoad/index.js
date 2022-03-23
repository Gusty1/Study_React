import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Loading from './Loading';
// import About from './About';
// import Home from './Home';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./Home'));

export default class Demo extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header">
							<h2>React Router Demo</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							<NavLink className="list-group-item" to="/about">
								About
							</NavLink>
							<NavLink className="list-group-item" to="/home">
								Home
							</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 註冊路由 */}
								<Suspense fallback={<Loading/>}>
									<Routes>
										<Route path="/about" element={<About/>} />
										<Route path="/home" element={<Home/>} />
									</Routes>
								</Suspense>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
