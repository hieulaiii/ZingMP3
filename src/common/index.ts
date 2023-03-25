export const convertNumberToTime = (x: any) => {
    if (x > 59) {
        if (x % 60 < 10) {
            if (x % 60 === 0) {
                return '0' + x / 60 + ':' + '00';
            } else {
                const x60 = x / 60;
                return (
                    '0' +
                    (Number(x60.toFixed(0)) < x60 ? x60.toFixed(0) : Number(x60.toFixed(0)) - 1) +
                    ':' +
                    '0' +
                    (x % 60)
                );
            }
        } else {
            const x60 = x / 60;
            return (
                '0' +
                (Number(x60.toFixed(0)) < x60 ? x60.toFixed(0) : Number(x60.toFixed(0)) - 1) +
                ':' +
                (x % 60)
            );
        }
    } else {
        return x < 10 ? '00:' + '0' + x : '00:' + x;
    }
};

export const convertTimeToNumber = (time: string) => {
    const timeArr = time.split(':');
    let timeNumber = Number(timeArr[timeArr.length - 1]);
    timeArr.forEach((item, index) => {
        if (index === timeArr.length - 1) return;
        timeNumber += Number(item) * 60;
    });
    return timeNumber;
};
