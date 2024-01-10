import axios from "axios";



   const getData = async (userId) => {
    const posts = [
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat",
        body: "quia et suscipit suscipit recusandae",
      },
    ];

    try {
      const resp = await axios(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const dataGet = resp.data;
      console.log(dataGet);

      const respPost = await axios.post(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        { ...dataGet, posts }
      );
      const dataPost = respPost.data;
      console.log(dataPost);
    } catch (err) {
      console.log(err);
    }
  };
 

  export default getData;




