import React from 'react'

const Hello = ({ data }) => {

    return (
        <>
            {data.map((person, index) => (
                <>
                    <li key={index}>{person.name}</li>
                </>
            ))}
        </>
    )
}

export default Hello
