import * as shell from 'shelljs';

// Crear los directorios necesarios
shell.mkdir('-p', 'dist/src/views');
shell.mkdir('-p', 'dist/public');

// Copiar archivos individuales de 'src/views' a 'dist/src/views'
shell.cp('-R', 'src/views/*', 'dist/src/views');

// Copiar archivos individuales de 'public' a 'dist/public'
shell.cp('-R', 'public/*', 'dist/public');