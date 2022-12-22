import { atom } from "recoil";

interface iData {
	_id?: string;
	name?: string;
	classes?: [];
	schoolCode?: string;
	email?: string;
	schoolName?: string;
	token?: string;
	teachers?: [];
	students?: [];
	verified?: boolean;
}

export const User = atom({
	key: "user",
	default: {} as iData | null,
});
