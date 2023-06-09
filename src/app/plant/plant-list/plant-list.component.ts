import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
})
export class PlantListComponent implements OnInit {
  plants: Array<Plant> = [];
  plantsIndoor: number = 0;
  plantsOutdoor: number = 0;
  constructor(private plantService: PlantService) {}

  ngOnInit() {
    this.getPlants();
  }

  getPlants(): void {
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.plantsIndoor = this.plants.filter(plant => plant.tipo === "Interior").reduce((acc, plant) => acc + 1, 0);
      this.plantsOutdoor = this.plants.filter(plant => plant.tipo === "Exterior").reduce((acc, plant) => acc + 1, 0);
    });
  }
}

