import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/hashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateUserAvatar', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update user profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com.br',
      password: 'password',
    });

    const updatedUser = await updateProfile.execute({
      userId: user.id,
      name: 'Updated John Doe',
      email: 'updatedjohndoe@example.com.br',
    });

    expect(updatedUser.name).toBe('Updated John Doe');
    expect(updatedUser.name).toBe('Updated John Doe');
  });

  it('should not be able to update inexisting user profile', async () => {
    await expect(
      updateProfile.execute({
        userId: 'inexistingUserId',
        name: 'Updated John Doe',
        email: 'updatedjohndoe@example.com.br',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to change user email to one that is already used', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com.br',
      password: 'password',
    });

    await fakeUsersRepository.create({
      name: 'UsedEmail Jhon Doe',
      email: 'usedemailjhondoe@example.com.br',
      password: 'password',
    });

    await expect(
      updateProfile.execute({
        userId: user.id,
        name: 'Updated John Doe',
        email: 'usedemailjhondoe@example.com.br',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update user profile password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com.br',
      password: 'password',
    });

    const updatedUser = await updateProfile.execute({
      userId: user.id,
      name: 'Updated John Doe',
      email: 'updatedjohndoe@example.com.br',
      password: 'updatedPassword',
      oldPassword: 'password',
    });

    expect(updatedUser.password).toBe('updatedPassword');
  });

  it('should not be able to update user profile password without sending oldPassword', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com.br',
      password: 'password',
    });

    await expect(
      updateProfile.execute({
        userId: user.id,
        name: 'Updated John Doe',
        email: 'updatedjohndoe@example.com.br',
        password: 'updatedPassword',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update user profile password without sending the correct oldPassword', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jhon Doe',
      email: 'jhondoe@example.com.br',
      password: 'password',
    });

    await expect(
      updateProfile.execute({
        userId: user.id,
        name: 'Updated John Doe',
        email: 'updatedjohndoe@example.com.br',
        password: 'updatedPassword',
        oldPassword: 'wrongPassword',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
