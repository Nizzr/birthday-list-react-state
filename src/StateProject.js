import React, { useState } from 'react';
import { data } from './data';

// css

import './style.css';

export default function StatePRoject() {
	const [people, setPeople] = useState(data);
	const [btn, setBtn] = useState('Clear All');
	let num = people.length;
	const deletePeople = () => {
		if (people === data) {
			setPeople(prevState => []);
      setBtn(prevState => 'Reset');
		} else {
			setPeople(prevState => data);
      setBtn(prevState => "Clear All");
		}
	};
	return (
		<section className="card">
			<h1>{num} birthdays today</h1>
			{people.map(person => {
				return (
					<div className="person " key={person.id}>
						<img src={person.image} className="rounded" alt="" />
						<div className="info">
							<h2>{person.name}</h2>
							<h4>{person.age} years</h4>
						</div>
					</div>
          
				);
			})}
			<div className="btn-container">
				<button type="button" onClick={deletePeople}>
					{btn}
				</button>
			</div>
		</section>
	);
}
