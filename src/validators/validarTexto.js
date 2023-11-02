export const validarTexto = (texto) => {
    const caracteres = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (caracteres.test(texto))
}