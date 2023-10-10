import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {Toaster} from 'react-hot-toast';
import { getUserService } from '../services/user.service';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
interface User {
  id: number,
  name: string,
  username: string,
}

type userList = {
  users: User[],
}

const User = async () => {
  // ------------------------------------- fetch call -------------------------------
  // const fetchUser = await fetch(
  //   'https://jsonplaceholder.typicode.com/users', { cache: "no-cache" }); 
    // Next come with it's own data caching based on file system
    // cache: "no-cache" will no cache any data for this api call
    // next: {revalidate: 10} this will fetch data and cache it in every 10 sec 
    // NOTE:-  Next data caching work with fetch only it will not work with axios and any third party
  // const users: User[] = await fetchUser.json();
  // ------------------------------- end ----------------------------------------------

  const users: User[] = (await getUserService()).data;

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div>User</div>
      <Link href="/user/products">Products</Link>
      <div>{new Date().toLocaleString()}</div>
      <hr />
      <ul>
        {users?.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default User;

// export const getServerSideProps = (async (context: any) => {
//   context.res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
//   const response = await getUserService();
//   const users: User[] = response?.data;
//   return { props: { users } }
// }) satisfies GetServerSideProps<{
//   users: User[]
// }>

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   context.res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
//   const users: User[] = await getUserService();
//   return {
//     props: {
//       users: users?.length > 0 ? users?.map((i: User) => {
//               return {
//                 id: i.id,
//                 name: i.name.toLowerCase(),
//               };
//             })
//           : [],
//     },
//   };
// }