import React from 'react';
import {Route} from 'react-router-dom';

import Contacts from './Contacts';


export default class About extends React.Component
{
	render()
	{	
		return (
			<div>
				<h1>О нас</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates laborum illum, amet in quis debitis officiis placeat ad quisquam velit saepe commodi culpa fuga suscipit ullam omnis quod, nisi neque.</p>
				<Route path="/about/contacts" component={Contacts} />
			</div>

		);
	}
}
