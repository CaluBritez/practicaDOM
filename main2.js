
//Ejercicio 2

let artista1 = {
    nombre:"Santoz",
    descripcion: "Es un artista Cordobes de 25 años. Hace rap y hip hop, su tema más destacado es Hiperborea.",
    imagen: "img/santoz_img.jpg"
}
let artista2 = {
    nombre: "Thundercat",
    descripcion: "Nacido en Los Angeles, EEUU. Su estilo es Electronica, Pop y mucho más, su tema más destacado es Funny Thing.",
    imagen: "img/thundercat_img.jpg"
}
let artista3 = {
    nombre: "Flying Lotus",
    descripcion: "Tiene 39 años y tambien nació en Los Angeles. Su estilo suena a música de pelicula. Su tema más destacado es Black Gold.",
    imagen: "img/flying_img.jpg"
}

let vector = [artista1,artista2,artista3]



let caja = document.getElementById('principal')
caja.innerHTML = '<div class="card m-3 col-lg-4 col-ms-6 col-xs-12" style="width: 18rem;"><img src="'+vector[0].imagen+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+vector[0].nombre+'</h5><p class="card-text">'+vector[0].descripcion+'</p></div></div><div class="card m-3 col-lg-4 col-ms-6 col-xs-12" style="width: 18rem;"><img src="'+vector[1].imagen+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+vector[1].nombre+'</h5><p class="card-text">'+vector[1].descripcion+'</p></div></div><div class="card m-3 col-lg-4 col-ms-6 col-xs-12" style="width: 18rem;"><img src="'+vector[2].imagen+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+vector[2].nombre+'</h5><p class="card-text">'+vector[2].descripcion+'</p></div></div>'