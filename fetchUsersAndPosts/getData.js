import axios from 'axios';

const getData= function(user_id){
    return new Promise(async (resolve,rejected) => {
        const {data:users} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        const {data:post} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
        // const allData = [users, post[1]];
        const allData = Object.assign(users,post[1]);
        console.log(allData);

    });
};

export default getData;