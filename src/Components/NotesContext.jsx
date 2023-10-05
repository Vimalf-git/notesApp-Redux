import React, { useState } from 'react'
import deleteIcon from './Redux/image/delete.svg'
import editIcon from './Redux/image/edit.svg'
import notesBlueIcon from './Redux/image/notes-blueIcon.svg' 
import { useNavigate } from 'react-router-dom';
export const NotesDataContext = React.createContext();
function NotesContext({ children }) {
    const [data, setData] = useState(
        [
            {
                title: 'Feed12backs',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            },
            {
                title: 'Feedbacks',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            }, {
                title: 'Feedbacks',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            }, {
                title: 'Feedbacks',
                body: "Lorem ipsum dolor sit amet consectetur",
                editIcon: editIcon,
                deleteIcon: deleteIcon,
                date: "5 days ago"
            },
        ])

    const [title, SetTittle] = useState('')
    const [body, SetBody] = useState('')
    const [addOrEdit, setAddOrEdit] = useState('add');
    const [editIndex,setEditindex]=useState();
    const navigate=useNavigate();
    return (
        <NotesDataContext.Provider value=
        {{ data, setData, title, SetTittle, body, 
        SetBody, addOrEdit ,setAddOrEdit,editIndex
        ,setEditindex,navigate,deleteIcon,editIcon,notesBlueIcon}}>
            {children}
        </NotesDataContext.Provider>
    )
}

export default NotesContext