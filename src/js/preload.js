// Title change
setInterval(() => {
    if (document.title !== 'WhatsAppG') {
        document.title = 'WhatsAppG';
    }

    const app = document.querySelector('#app > div > div._1XkO3.two');

    if (app !== undefined && app !== null) {
        if (!app.classList.contains('full-screen-size'))
            app.classList.add('full-screen-size');
    }
}, 10);

document.addEventListener('DOMContentLoaded', () => {
    const css =
        '.full-screen-size { width: 100vw !important; height: 100vh !important; top: 0 !important; left: !important; }';
    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');

    head.appendChild(style);

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
});
