import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api'
import './styles.css'
import { MdFlightTakeoff } from 'react-icons/md';
import { addReserveRequest } from '../../store/modules/reserve/actions'

export default function Home({ history }) {

    //Disparar action
    const dispatch = useDispatch();
    const [trips, setTrips] = useState([]);

    useEffect(() => {

        async function loadApi() {
            const response = await api.get('trips');
            setTrips(response.data);
        }

        loadApi();

    }, [])

    function handleAdd(id) {

        //Dispara as actios
        dispatch(addReserveRequest(id));

    }

    return (
        <>
            {trips.length === 0 ?
                <div className="loading">
                    <div className="spinner">

                    </div>
                    <div>Espere um momento...</div>
                </div>



                :
                <div className="box">

                    {
                        trips.map(trip => (
                            <li key={trip.id}>
                                <img src={trip.image} alt={trip.title} />
                                <strong>{trip.title}</strong>
                                <span>Status: {trip.status ? 'Disponível' : 'Indisponível'}</span>
                                <button type="button" onClick={() => handleAdd(trip.id)}>
                                    <div>
                                        <MdFlightTakeoff size={16} color="#fff" />
                                    </div>
                                    <span>SOLICITAR RESERVA</span>
                                </button>
                            </li>
                        ))
                    }

                </div>
            }
        </>
    )
}