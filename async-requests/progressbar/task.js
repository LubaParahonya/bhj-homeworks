const form = document.getElementById('form');
form.addEventListener('sabmit', event => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE){
            let i = 0
            const progress = document.getElementById( 'progress' );
              setInterval(function(){
                if(i < 1){
                  i += 0.1
                  progress.value = i
                }
            }, 1000)
        }
    } )

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload')
    const formData = new formData(form)
    xhr.send(formData)
})