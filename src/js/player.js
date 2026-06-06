
export function healthSort(players) {

	players.sort((a, b) => b.health - a.health);
	return players;
};