var os = require('os');
var OSinfo = require('./modules/OSInfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    
    if(input !== null) {
        var instruction = input.trim();
    
        switch (instruction) {
                
            case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        
            case '/system':
            process.stdout.write('Wersja językowa: ' + process.env.LANG + '\nWersja Node: ' + process.versions.node + '\n');
            process.exit();
            break;

            case '/getOSinfo':
            OSinfo.print();
            break;
  
            default:
            process.stdout.write('Wrong instruction!\n');
        
        };
    };
});