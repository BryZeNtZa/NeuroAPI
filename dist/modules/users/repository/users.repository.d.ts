import { FilterQuery, Model, Types } from 'mongoose';
import { User, UserDocument } from '../domain/schemas/user.schema';
export declare class UsersRepository {
    private model;
    constructor(model: Model<UserDocument>);
    findOne(userFilterQuery: FilterQuery<User>): Promise<User>;
    find(usersFilterQuery: FilterQuery<User>): Promise<User[]>;
    create(user: User): Promise<User>;
    findOneAndUpdate(userFilterQuery: FilterQuery<User>, user: Partial<User>): Promise<User>;
    update(id: string | Types.ObjectId, user: Partial<User>): Promise<User>;
    delete(id: string): Promise<User>;
}
