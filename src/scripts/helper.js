export function getCurrentDate() {
    const date = new Date()
    const dateText = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split(".")[0].replace(/[T:]/g, '-')
    return `${(date.getDate() < 10 ? '0' : '') + date.getDate()}.${(date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1)}.${date.getFullYear()} ${(date.getHours() < 10 ? '0' : '') + date.getHours()}:${(date.getMinutes() < 10 ? '0' : '') + date.getMinutes()}:${(date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
        } `
} 