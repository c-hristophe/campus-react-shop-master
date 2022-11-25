
import '../styles/home.css'
import axios from 'axios';

export default function DeleteProduct (data) {

    const productId = localStorage.getItem("react-shop")
    console.log(productId)
    alert ("la fiche sera supprimée définitivement")
    axios.delete(`http://localhost:8000/api/articles/${productId}`)
    .then(res => {
      const books = res.data;
     console.log(books)
    });

}