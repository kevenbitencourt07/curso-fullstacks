-- Criar o bacon de dados
create database copa_mundo;

-- Usar o banco
use copa_mundo; 

-- Criar a tabela 'selecao' com 3 colunas
create table selecoes (
	id int auto_increment primary key, -- Id único que aumenta automatiamente
    selecao varchar(100) not null, -- Nome da seleção, texto até 100 caracteres
    grupo char(1) not null -- Grupo da seleção, apenas uma letra (A, B, C)
);

select * from selecoes;

-- Insere várias selecoes de uma vez na tabela
insert into selecoes (selecao, grupo) values
	('Brasil', 'A'),
    ('França', 'B'),
    ('Ilhas Salomão', 'C'),
    ('Nigéria', 'D'),
    ('Nova Zelândia', 'E'),
    ('Japão', 'F');
    
    select * from selecoes;