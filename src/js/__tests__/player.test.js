import { healthIndication, healthSort } from '../player';



test('sort', () => {
	const players = [
		{ name: 'мечник', health: 10 },
		{ name: 'маг', health: 100 },
		{ name: 'лучник', health: 80 },
	];
	const sortName = ['маг', 'лучник', 'мечник'];
	const sort = healthSort(players);
	for (let i = 0; i < sort.length; i++) {
		expect(sort[i].name).toBe(sortName[i]);
	}
});
