import axios from 'axios';

export default function getChildContext() {
  return axios.get(`https://api.github.com/users/lzm854676408`)
  .then((res)=>(
    {gitInfo:res.data}
  ))
}
