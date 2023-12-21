const url = "https://localhost:8080/api/habitaciones?desde=0&limite=0";

export const traerHabitaciones = async () => {
    try {
        const resp = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });


        const data = await resp.json();

        return data;
    } catch (error) {
        console.log(error);
        return { msg: "No se conectó con backend" };
    }
};

export const traerUsuarios = async () => {
    const urlUsuarios = "https://backend-hotel-dev-xcnz.1.us-1.fl0.io/api/usuarios?desde=0&limite=0";
    try {
        const resp = await fetch(urlUsuarios, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2N…A1Nn0.Fu1Gt4KIjZC2gmulPv2DY7lmISqiO2ApAfL6tdmT1c0",
            },
        });


        const data = await resp.json();

        return data;
    } catch (error) {
        console.log(error);
        return { msg: "No se conectó con backend" };
    }
};