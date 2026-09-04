const database = 'controle_frequencia_v1';
const collProfessore = 'professores';
const collEstudantes = 'estudantes';
const collChamadas = 'chamadas';
const collDisciplinas = 'disciplinas';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collProfessore);
db.createCollection(collEstudantes);
db.createCollection(collChamadas);
db.createCollection(collDisciplinas);