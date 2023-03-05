import React, { useEffect } from 'react'
import './components.css'


const UserCard = (props) => {
    useEffect(() => {
        // console.log(props)
    }, [props])
    return (
        <>
            <div class="card mb-5 shadow rounded">
                <div className='user-avatar' style={{ background: `url(${(props.props.avatar_url)}` }}>

                </div>
                <div class="card-body">
                    <h5 class="card-title">@{props.props.login}</h5>
                    <p class="card-text">{props.props.bio}</p>
                </div>
                <div class="card-body">
                    <div className='row py-2 user-stats'>
                        <div className='col-4 border-right'>
                            <div className='flex flex-col'>
                                <h6>Followers</h6>
                                <p>{props.props.followers}</p>
                            </div>
                        </div>
                        <div className='col-4 border-right'>
                            <div className='flex flex-col'>
                                <h6>Following</h6>
                                <p>{props.props.following}</p>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='flex flex-col'>
                                <h6>Repos</h6>
                                <p>{props.props.public_repos}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard