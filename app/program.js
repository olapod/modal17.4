var os = require('os');

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
            var type = os.type();
            
            if(type === 'Darwin') {
                type = 'OSX';
            } else if(type === 'Windows_NT') {
                type = 'Windows';
            }

            var release = os.release();
            var cpu = os.cpus()[0].model;
            var uptime = os.uptime();
            var userInfo = os.userInfo();


            console.log('System:', type);
            console.log('Release:', release);
            console.log('CPU model:', cpu);
            console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
            console.log('User name:', userInfo.username);
            console.log('Home dir:', userInfo.homedir);

            break;
  
            default:
            process.stdout.write('Wrong instruction!\n');
        
        };
    };
});