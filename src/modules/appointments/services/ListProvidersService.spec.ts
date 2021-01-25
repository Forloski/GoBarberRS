// import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProvidersService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    listProviders = new ListProvidersService(fakeUsersRepository);
  });

  it('should be able to list providers', async () => {
    const firstUser = await fakeUsersRepository.create({
      name: 'First User',
      email: 'firstUser@email.com.br',
      password: 'firstUserPassword',
    });

    const secondUser = await fakeUsersRepository.create({
      name: 'Second User',
      email: 'secondUser@email.com.br',
      password: 'secondUserPassword',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Logged User',
      email: 'loggedUser@email.com.br',
      password: 'loggedUserPassword',
    });

    const providers = await listProviders.execute({
      userId: loggedUser.id,
    });

    expect(providers).toEqual([firstUser, secondUser]);
  });
});
