let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

function showQuestion(q) {
    // show question title
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = q.title;

    // show alternatives
    let alts = document.querySelectorAll('.alternative');
    
    alts.forEach(function(element, index){
        element.textContent = q.alternatives[index];

        element.addEventListener('click', function(){
            // check correct answer
            if(q.correctAnswer == index) {
                console.log('Correct Answer!');
            }
            else {
                console.log('Wrong Answer!');
            }
        });
    });
}

showQuestion(question);

let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    console.log('Clicked!');
});

