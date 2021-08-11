const cursor = document.querySelector('.cursor');

cursor.addEventListener('mousemove', (e) => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;');
});

console.log('jajjaajajajaj')