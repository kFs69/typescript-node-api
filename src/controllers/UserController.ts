import { Request, Response } from 'express';

import User from '../models/User';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.json(users);
  }

  public async store(req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body);

    return res.json(user);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;

    const user = await User.findByIdAndUpdate(id , req.body);

    return res.json(user);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;

    const user = await User.findByIdAndDelete(id, req.body);

    return res.json(user);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;

    const user = await User.findById(id);

    return res.json(user);
  }
}

export default new UserController()