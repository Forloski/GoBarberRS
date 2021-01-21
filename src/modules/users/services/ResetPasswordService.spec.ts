// import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokensRepository';
import ResetPasswordService from './ResetPasswordService';

let fakeUsersRepository: FakeUsersRepository;
let fakeUserTokensRepository: FakeUserTokensRepository;
let resetPassword: ResetPasswordService;

describe('ResetPasswordEmail', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeUserTokensRepository = new FakeUserTokensRepository();

    resetPassword = new ResetPasswordService(
      fakeUsersRepository,
      fakeUserTokensRepository,
    );
  });

  it('it should be able to reset password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'john doe',
      email: 'jhondoe@example.com.br',
      password: '123456',
    });

    const { token } = fakeUserTokensRepository.generate(user.id);

    await resetPassword.execute({
      password: '123456',
      token,
    });

    expect(sendMail).toHaveBeenCalled();
  });
});
