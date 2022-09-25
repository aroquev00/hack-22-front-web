import {URLs} from "./URLs";

export const getUserData = async (userId: string) => {
    return fetch(URLs.users)
        .then(async response => {
            const data = await response.json();
            data.requestStatus = response.status;
            if (!response.ok) {
                throw data
            }
        }).then(data => {
            return data
        });
}