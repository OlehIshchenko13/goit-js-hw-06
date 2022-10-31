const refs = {
    form: document.querySelector('.login-form'),
}

    refs.form.addEventListener('submit',onSubmitForm)

    function onSubmitForm(e) {
        e.preventDefault();
        
        const elementCurrentTargeget = e.currentTarget.elements;
        
        const email = elementCurrentTargeget.email.value;
        const password = elementCurrentTargeget.password.value
         if(email === ''|| password ===''){
            alert('заполни форму')
        }
        const formData =  {
            email,password
        }
       e.currentTarget.reset()
        
        console.log(formData);
    }
    