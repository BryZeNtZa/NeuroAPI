import { CreateAppointmentDto } from '../domain/dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../domain/dto/update-appointment.dto';
import { Appointment } from '../domain/schemas/appointment.schema';
import { AppointementsRepository } from '../repository/appointments.repository';
export declare class AppointmentsService {
    private readonly appointmentsRepository;
    constructor(appointmentsRepository: AppointementsRepository);
    getById(id: string): Promise<Appointment>;
    getList(page: number): Promise<Appointment[]>;
    create(dto: CreateAppointmentDto): Promise<Appointment>;
    update(id: string, dto: UpdateAppointmentDto): Promise<Appointment>;
    delete(id: string): Promise<Appointment>;
}
