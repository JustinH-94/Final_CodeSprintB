import React from 'react'
import { useParams } from 'react-router-dom'
import EditDoc from '../components/edit_doc'

function EditDocPage(props) {
    const{id}=useParams();
    return (
        <main>
            <EditDoc id={id} {...props}/>
        </main>
    )
}

export default EditDocPage
