import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import notesIcon from './Redux/image/description.svg'
import { useSelector } from 'react-redux';

function Sidebar() {
    const notesData=useSelector((store)=>{store.notesData});
console.log(notesData);
const navigate=useNavigate();
    return (
        <>
            <div className='sidebar'>

                <h1 style={{ color: "#203562",cursor: 'pointer'}} onClick={()=>{navigate('/')}}>Notes App</h1>
                <Link className='side-b-btn' to={'notesCard'} >
                    <img style={{ marginLeft: '1em' }} src={notesIcon   } />
                    <span>Notes</span>
                </Link>
            </div>
        </>
    )
}

export default Sidebar