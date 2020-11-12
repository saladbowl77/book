window.addEventListener('DOMContentLoaded', (event) => {
    if (navigator.userAgent.match('Android')){
        const link = `<link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500;600&display=swap" rel="stylesheet">`;
        document.getElementsByTagName('head')[0].appendChild(link);
    }
});
/*
window.onload = (event) => {
    window.scroll(0, 0);
};
*/