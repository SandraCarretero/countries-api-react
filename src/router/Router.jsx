import { Route, Routes } from 'react-router-dom';
import Countries from '../pages/Countries';
import Details from '../pages/Details';

const Router = () => {
	return (
		<Routes>
				<Route index element={<Countries />} />
				<Route path='/details' element={<Details />} />
		</Routes>
	);
};

export default Router;
