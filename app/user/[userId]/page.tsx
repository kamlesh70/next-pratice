import React from 'react'

const UserDetail = (props: any) => {
    const userId = props?.params?.userId;
    return (
        <div>UserDetail {userId}</div>
    )
}

export default UserDetail