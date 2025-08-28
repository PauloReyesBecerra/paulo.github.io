const validar = () => {

    document.querySelectorAll('.form-control').forEach((item) =>

        if(item.ariaValueMax.trim()==''){
            item.classList.remove('is-valid')
            item.classList.add('is-valid')
        }else{
            item.classList.remove('is-invalid')
            item.classList.add('is-valid')
        }

    })
}