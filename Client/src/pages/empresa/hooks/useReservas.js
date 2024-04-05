import withReservasDB from "../db/reservasDB.json";

export const useReservas = () => {
    const reservas = withReservasDB.reservasDB
    const mappedReservas = reservas?.map(reserva => ({
        id: reserva.id,
        username: reserva.username,
        email: reserva.email,
        direccion: reserva.dirección,
        telefono: reserva.telefono
    }))

    return { reservas: mappedReservas}
}