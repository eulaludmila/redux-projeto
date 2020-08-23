import { select, call, put, all, takeLatest } from 'redux-saga/effects'
import api from '../../../services/api';
import { addReserveSuccess, updateAmountSuccess } from '../reserve/actions'
import history from '../../../services/history';
//* - mais poderoso que o async
function* addToReserve({ id }) {

    //select - busca states do reducers
    const tripExists = yield select(
        state => state.reserve.find(trip => trip.id === id)
    )

    const myStock = yield call(api.get, `stock/${id}`);

    //Qauntidade do meu estoque
    const stockAmount = myStock.data.amount;

    //Estoque atual
    const currentStock = tripExists ? tripExists.amount : 0;

    //Soma o estoque atual com + 1
    const amount = currentStock + 1;

    //Verifica se a soma ficou maior que opossui no estoque
    if(amount > stockAmount){
        alert('Quantidade máxima permitida');
        return;
    }


    //Se existir irá aumentar somente o amount, caso não existir irá criar uma nova reserva
    if (tripExists) {
        
        yield put(updateAmountSuccess(id, amount));

    } else {

        //call - fazer chamada api
        const response = yield call(api.get, `trips/${id}`);

        const data = {
            ...response.data,
            amount:1,
        }

        //put - disparar actions dentro do saga
        yield put(addReserveSuccess(data));
        history.push('/reservas');
    }

}

function* updateAmount({id, amount}){
    if(amount <= 0) return;

    const myStock = yield call(api.get, `stock/${id}`);

    //Quantidade  em estoque
    const stockAmount = myStock.data.amount;

    if(amount > stockAmount){
        alert('Quantidade máxima atingida');
        return;
    }

    yield put(updateAmountSuccess(id, amount));


}

//Ouvinte de actions
export default all([

    //takeLatest - só faz a ultima requisição, o último click
    takeLatest('ADD_RESERVE_REQUEST', addToReserve),
    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount),
])