const computador = {
    marca: "lenovo",
    modelo: "legion gamer",
    color: "negro",
    precio: 790.990,
    locales: ["paris", "falabella", "PC Express"],
    estado: true,
};

//mostrar en consola solo marca
console.log(computador.marca);
//mostrar de otra forma
console.log(computador["marca"]);
//traer todo
console.log(computador);
// traer por locales en especifico
console.log(computador.locales[6]);




