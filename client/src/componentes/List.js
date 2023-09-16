import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const List = () =>{
    const [jugadores, setJugadores] = useState([]);

    //Antes de que se monte el componente, llamamos a la ruta de la api que me regresa la lista de autores
    useEffect(() =>{
        axios.get("http://localhost:8000/api/jugadores")
        .then(res => setJugadores(res.data))
        .catch(err => console.log(err));
    }, [])

    const borrarJugador = id =>{
        axios.delete('http://localhost:8000/api/jugadores/' + id)
        .then(res =>{
            let nuevaLista = jugadores.filter(jugador => jugador._id !==id);
            setJugadores(nuevaLista);
        })
    }

    return (
        <div>
            <div className="nav">
            <Link to = "/players/list" className='nav-item'><h1>Manage Players|</h1></Link>
            <Link to ="/status/game/1" className='nav-item'><h1>Manage Player Status</h1></Link>
            </div>
            <div className='card'>
                <div className="nav">
                    <Link to ="/players/list" className='nav-item'><h2>List|</h2></Link>
                    <Link to ="/players/addplayer" className='nav-item'><h2>Add Player</h2></Link>
                </div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Preferred Position</th>
                        <th>Picture</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jugadores.map((jugador, index) =>(
                            <tr key={index}>
                                <td>{jugador.name}</td>
                                <td>{jugador.position}</td>
                                <td>
                                    <img src={jugador.imagen} alt='jugador' className='img-fluid'/>
                                </td>
                                <td>
                                <button className='btn btn-danger' onClick={()=>borrarJugador(jugador._id)}>Borrar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default List;