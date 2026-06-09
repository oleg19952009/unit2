import { healthSort } from '../player';



test('sort', () => {
	const players = [
		{ name: 'мечник', health: 10 },
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 80 },
	];
	const sortName = [
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 80 },
		{ name: 'мечник', health: 10 },
	];
	const sort = healthSort(players);
	expect(sort).toEqual(sortName);

});
