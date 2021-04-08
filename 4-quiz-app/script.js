 
var a=0;

const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];








$('.answer').click(function(e){
    /* if(e.target.id == $(`label[for='${e.target.id}']`)[0].htmlFor){
        
    } */

    
})



function getquiz(deger){
    $('h2').text(quizData[deger].question);
    ($('label')[0].innerText= quizData[deger].a);
    ($('label')[1].innerText= quizData[deger].b);
    ($('label')[2].innerText= quizData[deger].c);
    ($('label')[3].innerText= quizData[deger].d);          
    var correct = quizData[deger].correct;
}








var countTrue = 0;

getquiz(a);
$('#submit').click(function(){
    
    if($(`label[for='${$('input[name="answer"]:checked')[0].id}']`)[0].innerText  == quizData[a][quizData[a].correct]){
        countTrue+=1;
    };
    console.log(quizData[a][quizData[a].correct]);
    
    a++;
    if(a>=quizData.length){
        $('#submit').prop('disabled',true);
        $('.quiz-header').append(`<p class="" style="text-align: center; margin-top: 5rem; font-weight: bold; font-size: 25px;"><i>4/${countTrue}</i></p>`);
        $('#submit').slideUp();

    }else{
        getquiz(a);
    }
})


 





