import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';

function BookTable() {

    let [post, setPost] = useState([])

    const columns = [
        {
            dataField: "id",
            text: "id"
        },
        {
            dataField: "title",
            text: "título"
        },
        {
            dataField: "body",
            text: "texto"
        }
    ]


    const getPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                // console.log("posts", data)
                setPost(data)
            })
    }

    useEffect(() => {
        getPosts()
    }, [])





    return (
        <div>
            <BootstrapTable keyField='id' data={post} columns={columns} />
            {/* OBS: DATA É COMO SE FOSSEM AS LINHAS */}
        </div>
    )
}

export default BookTable