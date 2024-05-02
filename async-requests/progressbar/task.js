const send = document.getElementById('send');
const inputFile = document.getElementById('file')

  send.addEventListener('click', event => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = () =>{
      let i = 0
      const progress = document.getElementById( 'progress' );
        setInterval(() => {
          if(i < 1){
            i += 0.1
            progress.value = i
          }
      }, 100)
    }
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    const formData = new FormData(form)
    xhr.send(formData)
})



