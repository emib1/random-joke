const button = document.querySelector('.submit');
const joke = document.querySelector('.joke');
const jokes = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nisi fugit odio deserunt labore iste corporis, exercitationem molestias. Eum ipsum obcaecati nisi magnam doloribus tempora?`,
    `ipsum dolor sit amet consectetur adipisicing elit. Minima nisi fugit odio deserunt labore iste corporis, exercitationem molestias. Eum ipsum obcaecati nisi magnam doloribus tempora?`,
    `  dolor sit amet consectetur adipisicing elit. Minima nisi fugit odio deserunt labore iste corporis, exercitationem molestias. Eum ipsum obcaecati nisi magnam doloribus tempora?`,
    `sit amet consectetur adipisicing elit. Minima nisi fugit odio deserunt labore iste corporis, exercitationem molestias. Eum ipsum obcaecati nisi magnam doloribus tempora?`,
    ` amet consectetur adipisicing elit. Minima nisi fugit odio deserunt labore iste corporis, exercitationem molestias. Eum ipsum obcaecati nisi magnam doloribus tempora?`,
]


let counter =0;

button.addEventListener('click', function(){
    counter++
    if (counter  > jokes.length){
        counter = 0
    }
   joke.textContent =jokes[counter];
   return counter;
})