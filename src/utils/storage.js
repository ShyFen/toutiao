// 添加
export const setItem = (key, value) => {
    if (typeof value === "object") {
        value = JSON.stringify(value)
    }
    return window.localStorage.setItem(key, value)
}

// 获取
export const getItem = key => {
    const data = window.localStorage.getItem(key);
    try {
        return JSON.parse(data)
    } catch (e) {
        return data
    }
}

// 删除
export const removeItem = key => {
    return window.localStorage.removeItem(key)
}