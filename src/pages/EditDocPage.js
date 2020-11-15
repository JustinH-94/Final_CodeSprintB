import React from 'react'
import { useParams } from 'react-router-dom'
import EditDoc from '../components/edit_doc'

function EditDocPage() {
    const{id}=useParams();
    return (
        <main>
            <EditDoc id={id}/>
        </main>
    )
}

export default EditDocPage
