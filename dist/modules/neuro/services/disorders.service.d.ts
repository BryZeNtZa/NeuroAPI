import { CreateDisorderDto } from '../domain/dto/create-disorder.dto';
import { UpdateDisorderDto } from '../domain/dto/update-disorder.dto';
import { Disorder } from '../domain/schemas/disorder.schema';
import { DisordersRepository } from '../repository/disorders.repository';
export declare class DisordersService {
    private readonly repo;
    constructor(repo: DisordersRepository);
    getById(id: string): Promise<Disorder>;
    getList(page: number): Promise<Disorder[]>;
    create(dto: CreateDisorderDto): Promise<Disorder>;
    update(id: string, dto: UpdateDisorderDto): Promise<Disorder>;
    delete(id: string): Promise<Disorder>;
}
