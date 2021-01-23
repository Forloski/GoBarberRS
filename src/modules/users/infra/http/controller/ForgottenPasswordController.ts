import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgottenEmailService from '@modules/users/services/SendForgottenPasswordEmailService';

export default class ForgottenPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgottenPasswordEmail = container.resolve(
      SendForgottenEmailService,
    );

    await sendForgottenPasswordEmail.execute({ email });

    return response.status(204).json();
  }
}
