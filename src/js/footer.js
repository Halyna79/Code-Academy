import axios from 'axios';

const form = document.querySelector(".footer-form")

const baseUrl = "https://portfolio-js.b.goit.study/api";
const endPoint = "/requests";

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    try{
        const email = e.currentTarget.elements.email.value.trim();
        const comment = e.currentTarget.elements.comments.value.trim();

        const data = JSON.stringify({email,comment})
        alert(data)
        const url = baseUrl + endPoint
        alert(url)
        const response = await axios.post(url,data,{
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"}
        })

        alert(111);    
        alert(response.data.title);
    }catch(e){
        alert(e)
    }    
    
    
});




