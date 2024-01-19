import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
    
    constructor(
        private readonly carsService: CarsService,
    ) {
        
    }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe) id : string ) {
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar( @Body() createCardDto: CreateCarDto ){
        return this.carsService.create(createCardDto);
    }

    @Patch(':id')
    updateCar( 
        @Body() updateCarDto: UpdateCarDto, 
        @Param('id', ParseUUIDPipe) id: string )
    {
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id: string ){
        this.carsService.delete(id);
        return {
            message: `Car with id: ${id} deleted`,
            status: 200,
        }
    }
}
