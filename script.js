function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "2030") {
        window.location.href = "main.html";
    } else {
        document.getElementById("error").innerText = "كلمة المرور غير صحيحة";
    }
}
