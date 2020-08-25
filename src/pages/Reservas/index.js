import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './styles.css';
import { MdAddCircle, MdRemoveCircle, MdDelete } from 'react-icons/md';
import { removeReserve, updateAmountRequest } from '../../store/modules/reserve/actions';

export default function Reservas({history}) {
    const reserves = useSelector(state => state.reserve);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    //Disparar action de remover
    function handleRemove(id) {
        dispatch(removeReserve(id))

    }
    //Disparar action de diminuir
    function decrementAmount(trip) {
        dispatch(updateAmountRequest(trip.id, trip.amount - 1));

    }
    //Disparar action de aumentar
    function incrementAmount(trip) {
        const alert = dispatch(updateAmountRequest(trip.id, trip.amount + 1));


        console.log(alert);
    }

    return (
        <div>
            <h1 className="titulo-reserva">Você solicitou {reserves.length} reserva(s)</h1>

            {

                reserves.map(reserve => (
                    <div className="reservas" key={reserve.id}>
                        <img src={reserve.image} alt={reserve.title} />
                        <strong>{reserve.title}</strong>
                        <div className="quantidade">
                            <button disabled={reserve.amount === 1 ? true : false} type="button" onClick={() => decrementAmount(reserve)}>
                                <MdRemoveCircle size={25} />
                            </button>
                            <span>{reserve.amount}</span>
                            <button type="button" onClick={() => incrementAmount(reserve)}>
                                <MdAddCircle size={25} />
                            </button>
                        </div>
                        <button className="lixo" type="button" onClick={() => handleRemove(reserve.id)}>
                            <MdDelete size={20} color="#191919" />
                        </button>
                    </div>
                ))
            }



            <footer>
                <button type="button" onClick={() => {history.push('/')}}>Solicitar Reservas</button>
            </footer>
        </div>
    )
}