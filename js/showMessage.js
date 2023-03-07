export function showMessage(message, type){

    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: type === "success" ? "#2a8b3f" : "red",
        color: '#dfecec',
        
        },
        onClick: function(){} // Callback after click
    }).showToast();

}

