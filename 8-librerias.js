Swal.fire({
    icon: 'warning',
    title: 'Mildis',
    text: 'El sitio está en construcción',
    footer: '<a href="./index.html">Dirigite al index</a>'
})

const boton = document.getElementById('boton')
boton.addEventListener('click', () => Toastify({
    text: "This is a toast",
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { } // Callback after click
}).showToast())