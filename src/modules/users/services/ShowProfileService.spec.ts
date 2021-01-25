import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('UpdateUserAvatar', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able to show user profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com.br',
      password: 'password',
    });

    const profile = await showProfile.execute({
      userId: user.id,
    });

    expect(profile.name).toBe('Jhon Doe');
    expect(profile.email).toBe('jhondoe@example.com.br');
  });

  it('should not able to show non-existing user profile', async () => {
    await expect(
      showProfile.execute({
        userId: 'inexistingUserId',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
