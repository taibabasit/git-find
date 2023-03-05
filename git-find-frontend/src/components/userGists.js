import React from 'react'
import './components.css'

const UserGists = ({ userData, title }) => {
    return (
        <div className='mb-4 shadow '>
            <div className='px-4 py-2 rounded' style={{ background: "white" }}>
                <div className='py-1'>
                    <h3>{title}</h3>
                </div>
                {userData.length !== 0 ?
                    <ul className='user-info-box'>
                        {userData.map((gists) => {
                            return (
                                <li>
                                    <div className='text-truncate'>
                                        <a href={gists.url}>{gists.url}</a>
                                    </div>
                                </li>
                            )
                        })}

                    </ul> :
                    <p>No {title} found!</p>}
            </div>
        </div>
    )
}

export default UserGists