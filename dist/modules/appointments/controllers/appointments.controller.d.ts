import { CreateAppointmentDto } from '../domain/dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../domain/dto/update-appointment.dto';
import { Appointment } from '../domain/schemas/appointment.schema';
import { AppointmentsService } from '../services/appointments.service';
export declare class AppointmentsController {
    private readonly appointmentdService;
    constructor(appointmentdService: AppointmentsService);
    index(): Promise<string>;
    getById(id: string): Promise<Appointment>;
    list(page: number): Promise<Appointment[]>;
    create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment>;
    update(id: string, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment>;
    delete(id: string): Promise<Appointment>;
}
