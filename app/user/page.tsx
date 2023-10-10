import Link from 'next/link'
import React from 'react'

interface User {
  id: number,
  name: string,
  username: string,
}

const User = async () => {
  const fetchUser = await fetch(
    'https://jsonplaceholder.typicode.com/users', { cache: "no-cache" }); 
    // Next come with it's own data caching based on file system
    // cache: "no-cache" will no cache any data for this api call
    // next: {revalidate: 10} this will fetch data and cache it in every 10 sec 
    // NOTE:-  Next data caching work with fetch only it will not work with axios and any third party
  const users: User[] = await fetchUser.json();
  return (
    <>
      <div>User</div>
      <Link href="/user/products">Products</Link>
      <div>{new Date().toLocaleString()}</div>
      <hr />
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default User