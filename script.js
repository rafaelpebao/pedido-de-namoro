function sim() {
    alert("Agora você é minha namorada! :)")
    location.href = "https://youtu.be/qCoKUyg-YN4?si=JXT4W4m3VhvOq47b"
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = randomNumber(10, 90);
    btn.style.left = randomNumber(10, 90);
    console.log("Opaaa, desviei...");

}

randomNumber(10, 90);


function randomNumber(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
