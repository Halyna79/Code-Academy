import axios from 'axios';
import iziToast from "izitoast";

const form = document.querySelector(".footer-form")

const btnClose = document.querySelector(".btn-close-res");
const menu = document.querySelector(".modal-window");
const body = document.body;

const baseUrl = "https://portfolio-js.b.goit.study/api";
const endPoint = "/requests";

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value.trim();
  const comment = e.currentTarget.elements.comments.value.trim();
  if (!email || !comment) {
    iziToast.show({
      backgroundColor: 'rgba(237, 59, 68, 1)',
      messageColor: 'rgba(255, 255, 255, 1)',
      position: 'topRight',
      message: 'Please fill in all fields!'
    });
    return;
  }
  const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    iziToast.show({
      backgroundColor: 'rgba(237, 59, 68, 1)',
      messageColor: 'rgba(255, 255, 255, 1)',
      position: 'topRight',
      message: 'Please enter a valid email!'
    });
    return;
  }

        const data = JSON.stringify({email,comment})
  
        const url = baseUrl + endPoint

      
        const response = await axios.post(url,data,{
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json"}
        })
        
        menu.classList.add('show');

        form.reset()
        body.classList.add('disable-scroll');
        
        
        menu.addEventListener("click", e=> {
                  
            if (e.target !== e.currentTarget) {
            return;
         }

        menu.classList.remove('show');
        body.classList.remove('disable-scroll');
        })

         
        
        document.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
                body.classList.remove('disable-scroll');
                menu.classList.remove('show');
            }
        }); 
        
    try {
        btnClose.addEventListener ('click', (e) => {
            body.classList.remove('disable-scroll');
            menu.classList.remove('show');
        })

    }catch(e){

        
        iziToast.show({
            backgroundColor: 'RGBA(237, 59, 68, 1)',
            messageColor: `rgba(255, 255, 255, 1)`,
            close: `false`,
            position: "topRight",
            message: `Error. Please, try again later`
      });

    }    
   
});