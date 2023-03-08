export const getTime = () => {
    const timezone = 8;
    const offset_GMT = new Date().getTimezoneOffset();
    const nowDate = new Date().getTime();
    const today = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
    const date = today.getFullYear() + "-" + twoDigits(today.getMonth() + 1) + "-" + twoDigits(today.getDate());
    const time = twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes()) + ":" + twoDigits(today.getSeconds());
    const timeString = '当前时间：' + date + '  ' + time;

    return timeString;

}

function twoDigits(val: number) {
    if (val < 10) return "0" + val;
    return val;
}