//Passar tipo e o dados que pretendo passar - obrigatórios
export function addReserveRequest(id) {
    return {
        type: 'ADD_RESERVE_REQUEST',
        id,
    }
}
export function addReserveSuccess(trip) {
    return {
        type: 'ADD_RESERVE_SUCCESS',
        trip,
    }
}

export function removeReserve(id) {
    return {
        type: 'REMOVE_RESERVE',
        id,
    }
}

export function updateAmountRequest(id, amount) {
    return {
        type: 'UPDATE_RESERVE_REQUEST',
        id,
        amount,
    }
}
export function updateAmountSuccess(id, amount) {
    return {
        type: 'UPDATE_RESERVE_SUCCESS',
        id,
        amount,
    }
}
export function toastMessage(mensagem, cor) {
    return {
        type: 'TOAST_MESSAGE',
        mensagem,
        cor,
    }
}
