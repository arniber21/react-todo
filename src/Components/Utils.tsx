import {atom} from "jotai";

export type TodoItem = {
	id: number;
	name: string;
	description: string;
}
export const todosAtom = atom([] as TodoItem[])