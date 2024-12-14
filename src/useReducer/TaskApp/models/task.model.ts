export interface ListModel {
	list: Task[];
}

export interface Task {
	id: number;
	description: string;
	completed: boolean;
}
