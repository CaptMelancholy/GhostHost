function setSlide(id) {
    let element = document.getElementById("quot");
    let author = document.getElementById("author-quote");
    switch (id) {
        case 1:
            element.innerHTML = "“Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus.”";
            author.innerHTML = "John Doe"; 
            break;
        case 2:
            element.innerHTM = "“Suspendisse leo consequat non. Maecenas lacinia faucibus enimquiinterdum dolor pulvinar vitae.”";
            author.innerHTML = "Jonny Doe";
            break;
        case 3:
            element.innerHTML = "“Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus enimquiinterdum dolor pulvinar vitae.”";
            author.innerHTML = "Johnathan Doe";
            break;
    };
}