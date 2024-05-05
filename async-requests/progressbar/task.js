const send = document.getElementById('send');
const inputFile = document.getElementById('file')
const progress = document.getElementById( 'progress' );

  send.addEventListener('click', event => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = (event) =>{
      progress.value = event.loaded / event.total

    }
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    const formData = new FormData(form)
    xhr.send(formData)
})



