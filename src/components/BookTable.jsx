import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default function BookTable() {

    let [comments, setComments] = useState([])

    const columns = [
        {
            dataField: "id",
            text: "Id"
        },
        {
            dataField: "name",
            text: "Nome"
        },
        {
            dataField: "email",
            text: "Email"
        },
        {
            dataField: "body",
            text: "Texto"
        }
    ]


    const getComments = () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => {
                // console.log("posts", data)
                setComments(data)
            })
    }

    useEffect(() => {
        getComments()
    }, [])


    return (
        <div>
            <BootstrapTable keyField='id' data={comments} columns={columns} pagination={paginationFactory()} />
            {/* OBS: DATA É COMO SE FOSSEM AS LINHAS */}
        </div>
    )
}