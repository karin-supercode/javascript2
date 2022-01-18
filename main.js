// Aufgabe 1_2

var neuerText = document.getElementById("info");
neuerText.innerHTML = "<h1>Hallo Welt </H1> ";
neuerText.innerHTML += "<h2> How are you</h2>";

document.getElementById('container').innerHTML = "<p> start of the element </p>"
document.write("end of the element");



// Aufgabe 1_3

document.getElementById("gallery").innerHTML = '<figure><img src="https://i.picsum.photos/id/471/400/400.jpg?hmac=PLoQbe6PGHDbywW6d8u-iiyPfHKP-6d4ttzawaMmCXo" alt="Wald"> <figcaption>Bild 1</figcaption><img src="https://i.picsum.photos/id/471/400/400.jpg?hmac=PLoQbe6PGHDbywW6d8u-iiyPfHKP-6d4ttzawaMmCXo" alt="Wald"> <figcaption>Bild 2</figcaption><img src="https://i.picsum.photos/id/471/400/400.jpg?hmac=PLoQbe6PGHDbywW6d8u-iiyPfHKP-6d4ttzawaMmCXo" alt="Wald"> <figcaption>Bild 3</figcaption></figure>';