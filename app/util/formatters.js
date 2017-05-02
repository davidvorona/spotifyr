export const arrayToStringList = (arr) => {
    let res = "";
    arr.forEach((el, i) => {
        if (i === arr.length - 1) res += el;
        else res += `${el}, `;
    });
    return res;
};
