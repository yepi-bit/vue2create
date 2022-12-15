/*输入框防抖*/
const debounce = function (fn, delay) {
    let timer = null;
    return function () {
        let content = this;
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(content, args);
        }, delay);
    };
};

export default debounce;
