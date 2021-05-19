let questions = [
    'Qual o seu nome?',
    'O que gosta de fazer nas horas vagas?',
    'Qual a sua linguagem de programação preferida?'
];

let answers = [];

function ask(i) {
    process.stdout.write(`\n ${questions[i]}`);
    process.stdout.write(' > ');
}

process.stdin.on('data', function(data) {
    //process.stdout.write('/n' + data.toString().trim() + '/n');
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function(){
    process.stdout.write('\n\n');
    process.stdout.write(`\n Agora pode ir ${answers[1]}, ${answers[0]}. Amanhã você volta a programar usando ${answers[2]}.`);
    process.stdout.write('\n\n');
});

ask(0);