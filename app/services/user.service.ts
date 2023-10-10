import axios from '@/app/util/axios';

export async function getUserService(){
    try {
        return (await axios({}).get('/users'));
    } catch (error: any) {
        console.log(error);
        return error?.response;
    }
}