const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {
    if(navigator.share)
    {
        navigator.share({
            text: 'Lets Friends Together',
            url: 'https://www.google.com/'
        }).then(() => {
            console.log('Thanks for sharing !');
        })
        .catch(() => console.error(err));
    }
    else 
    {
        alert("The current browser does not support the share function. Please, manually share the link.")
    }
});

const ref = document.getElementById('ref')

ref.addEventListener('click', event => {
    window.location.reload();
});


