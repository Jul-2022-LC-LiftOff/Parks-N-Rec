import React, {useEffect} from 'react'

    export default function GetInfo() {
        React.useEffect(() => {
            fetch('http://localhost:8080/login/getAll').then((data) => {
                console.log(data)
                return data.json();
            }).then((objectData) => {
                console.log(objectData)
            })
        })
    }