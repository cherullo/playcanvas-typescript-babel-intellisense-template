// @ts-check
import * as React from 'react';
import Hello from './Hello';

const user = {
	firstName: 'Glida',
	lastName: 'laso'
};

const profile = (<div>
	  <h3>{[user.firstName, user.lastName].join(' ')}</h3>
	</div>
);

export default class Welcome extends React.Component {
	render() {
		return <div>
				<h1>Hello Welcome!! </h1>
				{profile}
			</div>;
	}
}