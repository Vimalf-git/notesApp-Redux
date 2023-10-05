import React, { useContext, useEffect } from 'react'
import { NotesDataContext } from './NotesContext';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from './Redux/NotesDataSlice';
function NotesCard({isProb=false}) {
    const dispatch=useDispatch();
    const { data, setData,SetTittle,SetBody,
        setEditindex ,navigate,setAddOrEdit } = useContext(NotesDataContext);
        // useEffect(()=>{
            const notesData=useSelector((store)=>store.notesData);
            console.log(notesData);
        // },[])
    const delData=(index)=>{
        // const newValData=[...data];
        // newValData.splice(index,1);
        // setData(newValData);
        dispatch(remove(index));
    }
    const editData=(index)=>{
        if(!isProb){
            // SetTittle(data[index].title)
            // SetBody(data[index].body)
            setAddOrEdit('edit')
            setEditindex(index)
            navigate('/');
        }else{
        //     SetTittle(data[index].title)
        // SetBody(data[index].body)
        setAddOrEdit('edit')
        setEditindex(index)
        }
        
    }
    return (
        <>{
            isProb ? <>{
                notesData.map((e,i)=>{
                    return(
                        <div key={e.id} className='notesCardcomponent'>
                            <div className='card-head'>
                                <div>
                                    <h4>{e.title}</h4>
                                </div>
                                <div className='actionIcon'>
                                    <img src={e.editIcon}   style={{cursor: 'pointer'}}  onClick={()=>{editData(i)}}/>
                                    <img src={e.deleteIcon} style={{cursor: 'pointer'}} onClick={()=>{delData(i)}}/>
                                    
                                </div>
                            </div>
                            <div className='card-body'>
                                <p>{e.body}</p>
                            </div>
                            <div>
                                <p>{e.date}</p>
                            </div>
                        </div>
                    )
                })
            }</>:<div className= 'card-data-toggle'>
           {
                notesData.map((e,i)=>{
                    return(
                        <div key={e.id} className='notesCardcomponent'>
                            <div className='card-head'>
                                <div>
                                    <h4>{e.title}</h4>
                                </div>
                                <div className='actionIcon'>
                                    <img src={e.editIcon} style={{cursor: 'pointer'}} onClick={()=>{{editData(i)}}} />
                                    <img src={e.deleteIcon} style={{cursor: 'pointer'}} onClick={()=>{delData(i)}}/>
                                </div>
                            </div>
                            <div className='card-body'>
                                <p>{e.body}</p>
                            </div>
                            <div>
                                <p>{e.date}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        }
        
        </>
    )
}

export default NotesCard