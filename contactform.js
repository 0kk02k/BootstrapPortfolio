
// EmailJs Logic
document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault()

    emailjs.sendForm("service_8a3023d", "template_08avght", event.target).then(
        function () {
            Swal.fire({
                icon: "success",
                title: "Hurrayy!",
                text: "Your message was sent!",
            })
               
            
            confetti({
                particleCount: 2000,
                spread: 200,
                shape: ['circle', 'star', 'square']
            });
            document.getElementById("contact-form").reset();
        },
        function (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "404",
                text: "Contact Administration",
            })
        }
    )
})



