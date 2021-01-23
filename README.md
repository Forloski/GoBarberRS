# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando  o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve pode resetar sua senha;

**RNF**

- Utilizar mailtrap para testar envios em ambiente de dev;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O Link evenviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao reseta-la;

# Atualização de perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RNF**

**RN**

- O usuário não pode alterar seu email para um e-mail ja utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário deve confirmar a nova senha

# Painel do Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificaçÕes não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviados em tempo-real utilizando Socket.io;


**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponivel de um prestador;
- O usuário deve poder listar horários disponiveis de um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h ás 18h (Primeiro as 8h, ultimos as 17h);
- O usuário não pode agendar em um horário ja ocupado;
- O usuário não pode agendar em horario que ja passou;
- O usuário não pode agendar serviçoes consigo mesmo;



# Fazer

  1. Rotas e Controllers
  2. Repositório de tokens(TypeORM)
  3. Provider de envio de e-mail (dev)
  4. Testar tudo!
