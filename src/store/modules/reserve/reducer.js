import producer, { produce } from 'immer';
//action - é onde fica os dados e o type
//state - array onde vai ficar as reservas. Ela é imutável
export default function reserve(state = [], action) {

    //é necessário ter o switch para que uma outra action não dispare errado
    switch (action.type) {
        case 'ADD_RESERVE_SUCCESS':
            //pegando o state e realizando uma copia(draft)
            return produce(state, draft => {

                draft.push(action.trip);

            })

        case 'REMOVE_RESERVE':
            //pegando o state e realizando uma copia(draft)
            return produce(state, draft => {
                //Pega o index do objeto, se já existe a vigame retorna um número >= 0
                const tripIndex = draft.findIndex(trip => trip.id === action.id);

                //verifica se existe
                if (tripIndex >= 0) {

                    draft.splice(tripIndex, 1)
                }

            })

        case 'UPDATE_RESERVE_SUCCESS':

            //pegando o state e realizando uma copia(draft)
            return produce(state, draft => {
                //Pega o index do objeto, se já existe a vigame retorna um número >= 0
                const tripIndex = draft.findIndex(trip => trip.id === action.id);

                //verifica se existe
                if (tripIndex >= 0) {

                    draft[tripIndex].amount = Number(action.amount)
                }

            })


        default:
            return state;
    }
}
