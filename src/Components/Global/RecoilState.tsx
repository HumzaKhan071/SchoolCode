import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
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
	status?: string;
}

export const User = atom({
	key: "user",
	default: {} as iData | null,
	effects_UNSTABLE: [persistAtom],
});
