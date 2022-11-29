//creo los objetos
const productos = [
    // Suspenso
    {
        id: "libro-1",
        titulo: "El Psicoanalista",
        imagen: "./img/elpsicoanalista.jpg",
        categoria: {
            nombre: "suspenso",
            id: "Suspenso"
        },
        precio: 1500
    },
    {
        id: "Libro-2",
        titulo: "El Instituto",
        imagen: "./img/institute.jpg",
        categoria: {
            nombre: "suspenso",
            id: "Suspenso"
        },
        precio: 2500
    },
    {
        id: "Libro-3",
        titulo: "La lista del Juez",
        imagen: "./img/listajuez.jpg",
        categoria: {
            nombre: "suspenso",
            id: "Suspenso"
        },
        precio: 1850
    },
    {
        id: "Libro-4",
        titulo: "Tiempo de Perdón",
        imagen: "./img/tiempodeperdon.jpg",
        categoria: {
            nombre: "suspenso",
            id: "Suspenso"
        },
        precio: 1650
    },
    {
        id: "Libro-5",
        titulo: "Elevation",
        imagen: "./img/elevation.jpg",
        categoria: {
            nombre: "suspenso",
            id: "Suspenso"
        },
        precio: 2000
    },
    // Terror
    {
        id: "Terror-1",
        titulo: "IT",
        imagen: "./img/it.jpg",
        categoria: {
            nombre: "terror",
            id: "Terror"
        },
        precio: 3000
    },
    {
        id: "Terror-2",
        titulo: "El Exorcista",
        imagen: "./img/elexorcista.jpg",
        categoria: {
            nombre: "terror",
            id: "Terror"
        },
        precio: 900
    },
    {
        id: "Terror-3",
        titulo: "El Traje del muerto",
        imagen: "./img/trajedelmuerto.jpg",
        categoria: {
            nombre: "terror",
            id: "Terror"
        },
        precio: 1000
    },
    {
        id: "Terror-4",
        titulo: "El retrato de Dorian Gray",
        imagen: "./img/doriangray.jpg",
        categoria: {
            nombre: "terror",
            id: "Terror"
        },
        precio: 600
    },
    {
        id: "Terror-5",
        titulo: "La casa infernal",
        imagen: "./img/infernal.jpg",
        categoria: {
            nombre: "terror",
            id: "Terror"
        },
        precio: 3000
    },

//Policiales 
    {
        id: "Policial-1",
        titulo: "Tetralogia Cementerio de los libros olvidados ",
        imagen: "./img/cementerio.jpg",
        categoria: {
            nombre: "policial",
            id: "Policial"
        },
        precio: 8500
    },
    {
        id: "Policial-2",
        titulo: "El hombre de Tiza",
        imagen: "./img/elhombretiza.jpg",
        categoria: {
            nombre: "policial",
            id: "Policial"
        },
        precio: 2600
    },
    {
        id: "Policial-3",
        titulo: "La Falsa Pista",
        imagen: "./img/falsapista.jpg",
        categoria: {
            nombre: "policial",
            id: "Policial"
        },
        precio: 1600
    },
    {
        id: "Policial-4",
        titulo: "La pareja de al lado",
        imagen: "./img/parejalado.jpg",
        categoria: {
            nombre: "policial",
            id: "Policial"
        },
        precio: 2600
    },
    {
        id: "Policial-5",
        titulo: "El sotano de Oxford",
        imagen: "./img/sotanooxford.jpg",
        categoria: {
            nombre: "policial",
            id: "Policial"
        },
        precio: 1400
    },
//Ciencia Ficcion
    {
        id: "Ficcion-1",
        titulo: "La Torre Oscura",
        imagen: "./img/elpistolero.jpg",
        categoria: {
            nombre: "Ficcion",
            id: "ficcion"
        },
        precio: 4000
    },
    {
        id: "Ficcion-2",
        titulo: "El señor de los anillos",
        imagen: "./img/señoranillos.jpg",
        categoria: {
            nombre: "Ficcion",
            id: "ficcion"
        },
        precio: 8500
    },
    {
        id: "Ficcion-3",
        titulo: "Harry Potter",
        imagen: "./img/hp.jpg",
        categoria: {
            nombre: "Ficcion",
            id: "ficcion"
        },
        precio: 14500
    },
    {
        id: "Ficcion-4",
        titulo: "Geralt de Rivia",
        imagen: "./img/sangreelfos.jpg",
        categoria: {
            nombre: "Ficcion",
            id: "ficcion"
        },
        precio: 3800
    },
    {
        id: "Ficcion-5",
        titulo: "Thrawn",
        imagen: "./img/thrawn.jpg",
        categoria: {
            nombre: "Ficcion",
            id: "ficcion"
        },
        precio: 3000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}