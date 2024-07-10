import * as shell from 'shelljs';

// copia todos las vistas
shell.cp('-R', 'src/views', '/opt/render/project/src/dist/src/views');
shell.cp('-R', 'public', '/opt/render/project/src/dist/public');