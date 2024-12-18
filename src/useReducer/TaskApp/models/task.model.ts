export interface ListModel {
	list: Task[];
	deleteTask: (id: number) => void;
	completeTask: (id: number) => void;
}

export interface Task {
	id: number;
	date?: string;
	description: string;
	completed: boolean;
}

export type TaskAction =
	| { type: 'create'; payload: { description: string } }
	| { type: 'complete'; payload: { id: number } }
	| { type: 'delete'; payload: { id: number } };
