import { FilterQuery, Model } from 'mongoose';
import { Appointment, AppointmentDocument } from '../domain/schemas/appointment.schema';
export declare class AppointementsRepository {
    private model;
    constructor(model: Model<AppointmentDocument>);
    findOne(appointementFilterQuery: FilterQuery<Appointment>): Promise<Appointment>;
    find(appointementFilterQuery: FilterQuery<Appointment>): Promise<Appointment[]>;
    create(appointment: Partial<Appointment>): Promise<Appointment>;
    findOneAndUpdate(appointementFilterQuery: FilterQuery<Appointment>, appointment: Partial<Appointment>): Promise<Appointment>;
    update(id: string, appointment: Partial<Appointment>): Promise<Appointment>;
    delete(id: string): Promise<Appointment>;
}
