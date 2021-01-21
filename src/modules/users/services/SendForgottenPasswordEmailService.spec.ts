import AppError from '@shared/errors/AppError';

import FakeMailProvider from '@shared/container/providers/mailProvider/fakes/fakeMailProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokensRepository';

import SendForgottenEmailService from './SendForgottenPasswordEmailService';

let fakeUsersRepository: FakeUsersRepository;
let fakeMailProvider: FakeMailProvider;
let fakeUserTokensRepository: FakeUserTokensRepository;
let sendForgottenPasswordEmail: SendForgottenEmailService;

describe('SendForgottenPasswordEmail', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    fakeUserTokensRepository = new FakeUserTokensRepository();

    sendForgottenPasswordEmail = new SendForgottenEmailService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokensRepository,
    );
  });

  it('it should be able recover his password passing his email', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'john doe',
      email: 'jhondoe@example.com.br',
      password: '123456',
    });

    await sendForgottenPasswordEmail.execute({
      email: 'jhondoe@example.com.br',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('it should not be able recover a non-existing e-mail password', async () => {
    await expect(
      sendForgottenPasswordEmail.execute({
        email: 'jhondoe@example.com.br',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('it should generate a forgot password token', async () => {
    const generateToken = jest.spyOn(fakeUserTokensRepository, 'generate');

    const user = await fakeUsersRepository.create({
      name: 'john doe',
      email: 'jhondoe@example.com.br',
      password: '123456',
    });

    await sendForgottenPasswordEmail.execute({
      email: 'jhondoe@example.com.br',
    });

    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
