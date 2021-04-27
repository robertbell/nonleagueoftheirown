
document.querySelector("form").addEventListener("submit", handleSubmit);
if (el) {
    const handleSubmit = (e) => {
        e.preventDefault()
        let myForm = document.getElementById('pizzaOrder');
        let formData = new FormData(myForm)
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then(() => alert('test')).catch((error) =>
            alert(error))
    }
