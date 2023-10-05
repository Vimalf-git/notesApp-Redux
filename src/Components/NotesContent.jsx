import React, { useContext, useEffect, useRef, useState } from 'react'
import NotesCard from './NotesCard'
import { Button } from 'react-bootstrap'
import { NotesDataContext } from './NotesContext'
import { useDispatch, useSelector } from 'react-redux'
import { add,edit } from './Redux/NotesDataSlice'
function NotesContent() {

    const dispatch = useDispatch();

    const { data, setData,
        addOrEdit, setAddOrEdit, editIndex
        , editIcon, deleteIcon, notesBlueIcon } = useContext(NotesDataContext);

    // const[title,SetTitle]=useState('');
    const refTitle = useRef();
    const refBody = useRef();
    const notesData=useSelector((state)=>state.notesData)
    useEffect(()=>{
        if(addOrEdit=='edit'){
            refTitle.current.value=notesData[editIndex].title;
            refBody.current.value=notesData[editIndex].body;
        }
        
    },[addOrEdit,editIndex])
    const addData = () => {
        const title = refTitle.current.value;
        const body = refBody.current.value;
        if (addOrEdit === 'add') {
            // if (title === '' || body === '') {
            //     alert("please fill the note")
            // } else {
                const id=0;
            const newDataVal = {
                id,
                title,
                body,
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            }
            dispatch(add(newDataVal))
            refTitle.current.value = '';
            refBody.current.value = '';
            // setData(newDataVal);
            // SetTitle('');
            // SetBody('');
            // }
        } else {
            const id=0;
            const newEditVal ={ 
               data:{
                id,
                title,
                body,
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            },
            editIndex:editIndex
            }
            // setData(edit(newEditVal));
            console.log(newEditVal);
            dispatch(edit(newEditVal))
            console.log("enter into edit content");
            refTitle.current.value = '';
            refBody.current.value = '';
            // SetTitle('');
            // SetBody('');
            setAddOrEdit('add')
        }


    }

    return (
        <>
            <div className='noteCon'>

                <div className='dummy'>
                    <div className='notes-entry'>
                        <h4 style={{ color: "#203562", margin: '2em 0em 0em 2em' }}>Add a Note</h4>
                        <input ref={refTitle} className='notes-in-bx' placeholder='Title' />
                        <textarea ref={refBody} className='notes-txt-bx' placeholder='Take a note...' />
                        <Button className='add-btn' onClick={() => { addData() }}>{addOrEdit == 'add' ? "+ADD" : "Update"}</Button>
                    </div>
                </div>


                <div className='notes-fetch-Main'>
                    <div className='notes-fetch'>
                        <img src={notesBlueIcon} />
                        <span style={{ color: "#203562", fontSize: '1.5em' }}>My Notes</span>
                    </div>
                    <h4 style={{ color: '#677898', marginLeft: '1.5em' }}>Recently viewed</h4>
                    <div className='notesCard'>
                        <NotesCard isProb={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesContent