function updateStatus() {
    const container = document.getElementById('container');

    if ( navigator.onLine ) {
        container.classList.add( 'is-online' );
    } else {
        container.classList.remove( 'is-online' );
    }
};

window.addEventListener( 'offline', updateStatus );
window.addEventListener( 'online', updateStatus );

updateStatus();
