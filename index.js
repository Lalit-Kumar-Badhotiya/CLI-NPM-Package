#!/usr/bin/env node

import { createSpinner } from 'nanospinner'
import colors from 'colors'
import link from 'terminal-link'
 console.clear()
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function printSkill(languages , header) {
    const availableColors = shuffle(['yellow', 'red', 'blue', 'magenta']);

 
    let output = `${header}`.green + ' - ';
    languages.forEach((language, index) => {
        const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
        output += language[randomColor];
        if (index !== languages.length - 1) {
            output += ', ';
        }
    });

    console.log(output);
}
async function main(){
    console.log(`
( ͡° ͜ʖ ͡°) 
    
    

██╗░░██╗██╗  ████████╗██╗░░██╗███████╗██████╗░███████╗ ██╗██╗
██║░░██║██║  ╚══██╔══╝██║░░██║██╔════╝██╔══██╗██╔════╝ ██║██║
███████║██║  ░░░██║░░░███████║█████╗░░██████╔╝█████╗░░ ██║██║
██╔══██║██║  ░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██╔══╝░░ ╚═╝╚═╝
██║░░██║██║  ░░░██║░░░██║░░██║███████╗██║░░██║███████╗ ██╗██╗
╚═╝░░╚═╝╚═╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝ ╚═╝╚═╝`.magenta)
    
    
    console.log()
    const spinner = createSpinner('Loading Lalit\'s details').start()
    
    
    async function spinnerStart(){
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    
    await spinnerStart();
    
    spinner.success();
   
    console.log(`
    
█▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀
█▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█`.yellow);

    console.log()
    
    const githubLink = link('btw its awesome -> ','https://github.com/Lalit-Kumar-Badhotiya');
    const websiteLInk = link('Coolest thing -> ','comming_soon');
    console.log(`NAME    `.green + ' - ' + 'Lalit Kumar Badhotiya'.cyan);
    console.log(`STATUS  `.green + ' - ' + 'Student'.cyan);
    console.log(`GITHUB  `.green + ' - ' + `${githubLink}`.cyan);
    console.log(`WEBSITE `.green + ' - ' + `${websiteLInk}`.cyan);

    console.log()

    console.log(`

█▀ █▄▀ █ █░░ █░░ █▀
▄█ █░█ █ █▄▄ █▄▄ ▄█`.yellow)

console.log()
printSkill(['Java', 'C', 'Python', 'TypeScript', 'JavaScript'] , 'LANGUAGES   ');
printSkill(['React', 'NextJs', 'SpringBoot'] , 'FRAMEWORKS  ');
printSkill(['Express', 'Nodejs', 'WebSocket' , 'Prisma' , 'Redis' ] , 'TECHNOLOGIES');
printSkill(['MongoDb', 'PostgresSQL', 'SQL' ] , 'DATABASES   ');
printSkill(['Docker', 'Kubernetes', 'Github Actions', 'AWS' , 'AZURE' ] , 'DEVOPS      ');
printSkill(['GIT', 'Github' ] , 'Tools       ');

console.log(`

█▀▄▀█ █▀▀ █▀ █▀ ▄▀█ █▀▀ █▀▀
█░▀░█ ██▄ ▄█ ▄█ █▀█ █▄█ ██▄`.yellow)

console.log()
console.log('Lalit is up for hire, ready to help your company get to next heights and ofc Thanks for checking out my cli!'.magenta)
console.log()
}

main()