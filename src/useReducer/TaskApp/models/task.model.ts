export interface ListModel {
	list: Task[];
}

interface Task {
	id: number;
	description: string;
	completed: boolean;
}
