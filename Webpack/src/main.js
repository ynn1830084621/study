import count from './js/count';
import sum from './js/sum';
import './css/index.css'

// var result = count(2, 1)
let result = count(2, 1);
console.log(result);
console.log(sum(1, 2, 3, 4, 5));

if(module.hot) {
    //是否有热模块替换功能
    module.hot.accept('./js/count')
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}