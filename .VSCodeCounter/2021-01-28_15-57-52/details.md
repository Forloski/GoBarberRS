# Details

Date : 2021-01-28 15:57:52

Directory c:\Users\Fernando\Documents\Codes\RocketSeat-Nivel-2\back-end-nivel2\src

Total : 85 files,  2163 codes, 47 comments, 633 blanks, all 2843 lines

[summary](results.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [src/@types/express.d.ts](/src/@types/express.d.ts) | TypeScript | 7 | 1 | 1 | 9 |
| [src/config/auth.ts](/src/config/auth.ts) | TypeScript | 6 | 0 | 1 | 7 |
| [src/config/upload.ts](/src/config/upload.ts) | TypeScript | 16 | 0 | 5 | 21 |
| [src/modules/appointments/dtos/ICreateAppointmentDTO.ts](/src/modules/appointments/dtos/ICreateAppointmentDTO.ts) | TypeScript | 4 | 1 | 1 | 6 |
| [src/modules/appointments/dtos/IFindByDayAndProviderDTO.ts](/src/modules/appointments/dtos/IFindByDayAndProviderDTO.ts) | TypeScript | 6 | 1 | 1 | 8 |
| [src/modules/appointments/dtos/IFindByMonthAndProviderDTO.ts](/src/modules/appointments/dtos/IFindByMonthAndProviderDTO.ts) | TypeScript | 5 | 1 | 1 | 7 |
| [src/modules/appointments/infra/http/controller/AppointmentsController.ts](/src/modules/appointments/infra/http/controller/AppointmentsController.ts) | TypeScript | 16 | 1 | 7 | 24 |
| [src/modules/appointments/infra/http/controller/ProvidersController.ts](/src/modules/appointments/infra/http/controller/ProvidersController.ts) | TypeScript | 13 | 1 | 6 | 20 |
| [src/modules/appointments/infra/http/routes/appointments.routes.ts](/src/modules/appointments/infra/http/routes/appointments.routes.ts) | TypeScript | 8 | 1 | 6 | 15 |
| [src/modules/appointments/infra/http/routes/providers.routes.ts](/src/modules/appointments/infra/http/routes/providers.routes.ts) | TypeScript | 8 | 1 | 6 | 15 |
| [src/modules/appointments/infra/typeorm/entities/Appointment.ts](/src/modules/appointments/infra/typeorm/entities/Appointment.ts) | TypeScript | 27 | 1 | 9 | 37 |
| [src/modules/appointments/infra/typeorm/repositories/AppointmentsRepository.ts](/src/modules/appointments/infra/typeorm/repositories/AppointmentsRepository.ts) | TypeScript | 63 | 2 | 17 | 82 |
| [src/modules/appointments/repositories/fakes/FakeAppointmentsRepository.ts](/src/modules/appointments/repositories/fakes/FakeAppointmentsRepository.ts) | TypeScript | 54 | 1 | 15 | 70 |
| [src/modules/appointments/repositories/iAppointmentsRepository.ts](/src/modules/appointments/repositories/iAppointmentsRepository.ts) | TypeScript | 12 | 1 | 2 | 15 |
| [src/modules/appointments/services/CreateAppointmentService.spec.ts](/src/modules/appointments/services/CreateAppointmentService.spec.ts) | TypeScript | 32 | 0 | 9 | 41 |
| [src/modules/appointments/services/CreateAppointmentService.ts](/src/modules/appointments/services/CreateAppointmentService.ts) | TypeScript | 34 | 2 | 11 | 47 |
| [src/modules/appointments/services/ListProviderDayAvailabilityService.spec.ts](/src/modules/appointments/services/ListProviderDayAvailabilityService.spec.ts) | TypeScript | 44 | 1 | 10 | 55 |
| [src/modules/appointments/services/ListProviderDayAvailabilityService.ts](/src/modules/appointments/services/ListProviderDayAvailabilityService.ts) | TypeScript | 53 | 3 | 14 | 70 |
| [src/modules/appointments/services/ListProviderMonthAvailabilityService.spec.ts](/src/modules/appointments/services/ListProviderMonthAvailabilityService.spec.ts) | TypeScript | 74 | 1 | 18 | 93 |
| [src/modules/appointments/services/ListProviderMonthAvailabilityService.ts](/src/modules/appointments/services/ListProviderMonthAvailabilityService.ts) | TypeScript | 51 | 3 | 14 | 68 |
| [src/modules/appointments/services/ListProvidersService.spec.ts](/src/modules/appointments/services/ListProvidersService.spec.ts) | TypeScript | 31 | 1 | 9 | 41 |
| [src/modules/appointments/services/ListProvidersService.ts](/src/modules/appointments/services/ListProvidersService.ts) | TypeScript | 20 | 1 | 8 | 29 |
| [src/modules/users/dtos/ICreateUserDTO.ts](/src/modules/users/dtos/ICreateUserDTO.ts) | TypeScript | 5 | 0 | 1 | 6 |
| [src/modules/users/dtos/IFindAllProvidersDTO.ts](/src/modules/users/dtos/IFindAllProvidersDTO.ts) | TypeScript | 3 | 0 | 1 | 4 |
| [src/modules/users/infra/http/controller/ForgottenPasswordController.ts](/src/modules/users/infra/http/controller/ForgottenPasswordController.ts) | TypeScript | 13 | 0 | 6 | 19 |
| [src/modules/users/infra/http/controller/ProfileController.ts](/src/modules/users/infra/http/controller/ProfileController.ts) | TypeScript | 27 | 0 | 12 | 39 |
| [src/modules/users/infra/http/controller/ResetPasswordController.ts](/src/modules/users/infra/http/controller/ResetPasswordController.ts) | TypeScript | 11 | 0 | 6 | 17 |
| [src/modules/users/infra/http/controller/SessionsController.ts](/src/modules/users/infra/http/controller/SessionsController.ts) | TypeScript | 12 | 0 | 7 | 19 |
| [src/modules/users/infra/http/controller/UserAvatarController.ts](/src/modules/users/infra/http/controller/UserAvatarController.ts) | TypeScript | 13 | 0 | 5 | 18 |
| [src/modules/users/infra/http/controller/UsersController.ts](/src/modules/users/infra/http/controller/UsersController.ts) | TypeScript | 16 | 0 | 7 | 23 |
| [src/modules/users/infra/http/middlewares/ensureAuthenticated.ts](/src/modules/users/infra/http/middlewares/ensureAuthenticated.ts) | TypeScript | 28 | 0 | 11 | 39 |
| [src/modules/users/infra/http/routes/passwords.routes.ts](/src/modules/users/infra/http/routes/passwords.routes.ts) | TypeScript | 9 | 0 | 5 | 14 |
| [src/modules/users/infra/http/routes/profile.routes.ts](/src/modules/users/infra/http/routes/profile.routes.ts) | TypeScript | 9 | 0 | 6 | 15 |
| [src/modules/users/infra/http/routes/sessions.routes.ts](/src/modules/users/infra/http/routes/sessions.routes.ts) | TypeScript | 6 | 0 | 5 | 11 |
| [src/modules/users/infra/http/routes/users.routes.ts](/src/modules/users/infra/http/routes/users.routes.ts) | TypeScript | 18 | 0 | 6 | 24 |
| [src/modules/users/infra/typeorm/entities/User.ts](/src/modules/users/infra/typeorm/entities/User.ts) | TypeScript | 29 | 1 | 10 | 40 |
| [src/modules/users/infra/typeorm/entities/UserToken.ts](/src/modules/users/infra/typeorm/entities/UserToken.ts) | TypeScript | 23 | 1 | 7 | 31 |
| [src/modules/users/infra/typeorm/repositories/UserTokensRepository.ts](/src/modules/users/infra/typeorm/repositories/UserTokensRepository.ts) | TypeScript | 23 | 0 | 11 | 34 |
| [src/modules/users/infra/typeorm/repositories/UsersRepository.ts](/src/modules/users/infra/typeorm/repositories/UsersRepository.ts) | TypeScript | 45 | 0 | 17 | 62 |
| [src/modules/users/providers/hashProvider/fakes/FakeHashProvider.ts](/src/modules/users/providers/hashProvider/fakes/FakeHashProvider.ts) | TypeScript | 10 | 0 | 4 | 14 |
| [src/modules/users/providers/hashProvider/implementations/BCryptHashProvider.ts](/src/modules/users/providers/hashProvider/implementations/BCryptHashProvider.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [src/modules/users/providers/hashProvider/models/IHashProvider.ts](/src/modules/users/providers/hashProvider/models/IHashProvider.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [src/modules/users/providers/index.ts](/src/modules/users/providers/index.ts) | TypeScript | 4 | 0 | 3 | 7 |
| [src/modules/users/repositories/IUserTokensRepository.ts](/src/modules/users/repositories/IUserTokensRepository.ts) | TypeScript | 5 | 0 | 2 | 7 |
| [src/modules/users/repositories/IUsersRepository.ts](/src/modules/users/repositories/IUsersRepository.ts) | TypeScript | 10 | 0 | 2 | 12 |
| [src/modules/users/repositories/fakes/FakeUserTokensRepository.ts](/src/modules/users/repositories/fakes/FakeUserTokensRepository.ts) | TypeScript | 25 | 0 | 11 | 36 |
| [src/modules/users/repositories/fakes/FakeUsersRepository.ts](/src/modules/users/repositories/fakes/FakeUsersRepository.ts) | TypeScript | 37 | 0 | 19 | 56 |
| [src/modules/users/services/CreateSessionService.spec.ts](/src/modules/users/services/CreateSessionService.spec.ts) | TypeScript | 54 | 2 | 10 | 66 |
| [src/modules/users/services/CreateSessionService.ts](/src/modules/users/services/CreateSessionService.ts) | TypeScript | 44 | 0 | 15 | 59 |
| [src/modules/users/services/CreateUserService.spec.ts](/src/modules/users/services/CreateUserService.spec.ts) | TypeScript | 39 | 0 | 9 | 48 |
| [src/modules/users/services/CreateUserService.ts](/src/modules/users/services/CreateUserService.ts) | TypeScript | 33 | 1 | 12 | 46 |
| [src/modules/users/services/ResetPasswordService.spec.ts](/src/modules/users/services/ResetPasswordService.spec.ts) | TypeScript | 74 | 3 | 20 | 97 |
| [src/modules/users/services/ResetPasswordService.ts](/src/modules/users/services/ResetPasswordService.ts) | TypeScript | 38 | 2 | 16 | 56 |
| [src/modules/users/services/SendForgottenPasswordEmailService.spec.ts](/src/modules/users/services/SendForgottenPasswordEmailService.spec.ts) | TypeScript | 52 | 0 | 15 | 67 |
| [src/modules/users/services/SendForgottenPasswordEmailService.ts](/src/modules/users/services/SendForgottenPasswordEmailService.ts) | TypeScript | 48 | 2 | 13 | 63 |
| [src/modules/users/services/ShowProfileService.spec.ts](/src/modules/users/services/ShowProfileService.spec.ts) | TypeScript | 30 | 0 | 8 | 38 |
| [src/modules/users/services/ShowProfileService.ts](/src/modules/users/services/ShowProfileService.ts) | TypeScript | 22 | 1 | 9 | 32 |
| [src/modules/users/services/UpdateProfileService.spec.ts](/src/modules/users/services/UpdateProfileService.spec.ts) | TypeScript | 105 | 0 | 19 | 124 |
| [src/modules/users/services/UpdateProfileService.ts](/src/modules/users/services/UpdateProfileService.ts) | TypeScript | 56 | 1 | 16 | 73 |
| [src/modules/users/services/UpdateUserAvatarService.spec.ts](/src/modules/users/services/UpdateUserAvatarService.spec.ts) | TypeScript | 55 | 0 | 14 | 69 |
| [src/modules/users/services/UpdateUserAvatarService.ts](/src/modules/users/services/UpdateUserAvatarService.ts) | TypeScript | 32 | 1 | 14 | 47 |
| [src/modules/users/views/forgotPassword.hbs](/src/modules/users/views/forgotPassword.hbs) | Handlebars | 19 | 0 | 3 | 22 |
| [src/shared/container/index.ts](/src/shared/container/index.ts) | TypeScript | 21 | 0 | 8 | 29 |
| [src/shared/container/providers/index.ts](/src/shared/container/providers/index.ts) | TypeScript | 19 | 0 | 7 | 26 |
| [src/shared/container/providers/mailProvider/dtos/ISendMailDTO.ts](/src/shared/container/providers/mailProvider/dtos/ISendMailDTO.ts) | TypeScript | 11 | 0 | 3 | 14 |
| [src/shared/container/providers/mailProvider/fakes/fakeMailProvider.ts](/src/shared/container/providers/mailProvider/fakes/fakeMailProvider.ts) | TypeScript | 8 | 0 | 3 | 11 |
| [src/shared/container/providers/mailProvider/implementations/EtherealMailProvider.ts](/src/shared/container/providers/mailProvider/implementations/EtherealMailProvider.ts) | TypeScript | 47 | 0 | 7 | 54 |
| [src/shared/container/providers/mailProvider/models/IMailProvider.ts](/src/shared/container/providers/mailProvider/models/IMailProvider.ts) | TypeScript | 4 | 0 | 2 | 6 |
| [src/shared/container/providers/mailTemplateProvider/dtos/IParseMailTemplateDTO.ts](/src/shared/container/providers/mailTemplateProvider/dtos/IParseMailTemplateDTO.ts) | TypeScript | 7 | 0 | 2 | 9 |
| [src/shared/container/providers/mailTemplateProvider/fakes/FakeMailTemplateProvider.ts](/src/shared/container/providers/mailTemplateProvider/fakes/FakeMailTemplateProvider.ts) | TypeScript | 7 | 0 | 3 | 10 |
| [src/shared/container/providers/mailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts](/src/shared/container/providers/mailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts) | TypeScript | 17 | 0 | 6 | 23 |
| [src/shared/container/providers/mailTemplateProvider/models/IMailTemplateProvider.ts](/src/shared/container/providers/mailTemplateProvider/models/IMailTemplateProvider.ts) | TypeScript | 4 | 0 | 2 | 6 |
| [src/shared/container/providers/storageProvider/fakes/FakeStorageProvider.ts](/src/shared/container/providers/storageProvider/fakes/FakeStorageProvider.ts) | TypeScript | 15 | 0 | 7 | 22 |
| [src/shared/container/providers/storageProvider/implementations/DiskStorageProvider.ts](/src/shared/container/providers/storageProvider/implementations/DiskStorageProvider.ts) | TypeScript | 23 | 0 | 7 | 30 |
| [src/shared/container/providers/storageProvider/models/IStorageProvider.ts](/src/shared/container/providers/storageProvider/models/IStorageProvider.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [src/shared/errors/AppError.ts](/src/shared/errors/AppError.ts) | TypeScript | 9 | 0 | 4 | 13 |
| [src/shared/infra/http/routes/index.ts](/src/shared/infra/http/routes/index.ts) | TypeScript | 16 | 1 | 4 | 21 |
| [src/shared/infra/http/server.ts](/src/shared/infra/http/server.ts) | TypeScript | 32 | 2 | 9 | 43 |
| [src/shared/infra/typeorm/index.ts](/src/shared/infra/typeorm/index.ts) | TypeScript | 2 | 0 | 2 | 4 |
| [src/shared/infra/typeorm/migrations/1606847561545-CreateAppointments.ts](/src/shared/infra/typeorm/migrations/1606847561545-CreateAppointments.ts) | TypeScript | 43 | 1 | 3 | 47 |
| [src/shared/infra/typeorm/migrations/1607031646695-CreateUser.ts](/src/shared/infra/typeorm/migrations/1607031646695-CreateUser.ts) | TypeScript | 47 | 1 | 3 | 51 |
| [src/shared/infra/typeorm/migrations/1607040062784-ChangeProviderFieldToProviderId.ts](/src/shared/infra/typeorm/migrations/1607040062784-ChangeProviderFieldToProviderId.ts) | TypeScript | 42 | 2 | 6 | 50 |
| [src/shared/infra/typeorm/migrations/1607530987976-AddAvatarFieldsToUser.ts](/src/shared/infra/typeorm/migrations/1607530987976-AddAvatarFieldsToUser.ts) | TypeScript | 17 | 0 | 3 | 20 |
| [src/shared/infra/typeorm/migrations/1611335498272-CreateUserTokens.ts](/src/shared/infra/typeorm/migrations/1611335498272-CreateUserTokens.ts) | TypeScript | 53 | 0 | 3 | 56 |
| [src/shared/infra/typeorm/migrations/1611695597701-AddUserIdToAppointments.ts](/src/shared/infra/typeorm/migrations/1611695597701-AddUserIdToAppointments.ts) | TypeScript | 34 | 0 | 5 | 39 |

[summary](results.md)