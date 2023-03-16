


const hamburger = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
        setTimeout(() => {
            navLinks[i].classList.add('active');
        }, i * 100)
    }
})


const posts = document.querySelector('.posts');

const getUrl = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
    .then(j => j.json())
    .then(responses => {
        for (let i = 0; i < 6; i++) {
            const response = responses[i];
          //  console.log(response.title + "          " + response.body);   
             posts.innerHTML+=
            "<div class='post'>"+
                "<div class='post-text'>"+
                    "<h2 class='post-title'>"+response.title+"</h2>"+
                    "<div class='post-line'></div>"+
                    "<div class='post-body'>"+response.body+"</div>"+
                "</div>"+
                "<button class='post-button read-button'>Read More &#8250;</button>"+
           "</div>"
        }
    });
}

window.addEventListener('load', () => {
    getUrl();
});