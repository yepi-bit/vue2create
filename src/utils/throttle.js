/*按钮节流*/
const throttle = (func, delay) => {
    // 缓存一个定时器
    let timer = null;
    // 这里返回的函数是每次用户实际调用的节流函数
    return function (...args) {
        if (!timer) {
            //判断timer是否有值,如果没有则说明定时器不存在即可继续执行
            timer = setTimeout(() => {
                //关
                func.apply(this, arguments);
                timer = null; //开
            }, delay);
        }
    };
};
export default throttle;

