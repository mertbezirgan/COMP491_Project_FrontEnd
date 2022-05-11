
export const storageKeys = {
    user: "user",
    token: "token",
    logged: "logged"
};

export const getStorageItem = (key: string) => {
    let val = localStorage.getItem(key);
    if (!val) return null;

    return JSON.parse(val);
};

export const setStorageItem = (key: string, val: any) => {
    localStorage.setItem(key, JSON.stringify(val));
}; 