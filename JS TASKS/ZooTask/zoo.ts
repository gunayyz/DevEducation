
interface Type {
    nameOfType: string;
    biome: string;
    reservoir: boolean;
    area: number;
    food: string;
    IsPredator: boolean;
  }
  
  interface Animal extends Type {
    name: string;
    age: number;
    foodAmount: number;
  }
  
  interface Settlement {
    totalAnimals: Animal[];
    biome: string;
    reservior: boolean;
    capacity: number;
    IsForPredator: boolean;
  
  }
  
  let Rabbit: Animal = {
    name: 'Katy',
    age: 3,
    foodAmount: 3,
    nameOfType: 'Rabbit',
    biome: 'forest',
    reservoir: true,
    area: 52,
    food: 'carrot',
    IsPredator: false
  }
  
  let Leon: Animal = {
    name: 'Natasha',
    age: 6,
    foodAmount: 13,
    nameOfType: 'Leon',
    biome: 'forest',
    reservoir: true,
    area: 30,
    food: 'deer meat',
    IsPredator: true
  
  }
  let Fish: Animal = {
    name: 'Salmon',
    age: 1,
    foodAmount: 4,
    nameOfType: 'Fish',
    biome: 'home',
    reservoir: false,
    area: 12,
    food: 'fish feed',
    IsPredator: false
  
  }
  let CageForRabbit: Settlement = {
    totalAnimals: [],
    biome: 'forest',
    reservior: true,
    capacity: 1,
    IsForPredator: false
  }

  let CageForLeon: Settlement = {
    totalAnimals: [],
    biome: 'forest',
    reservior: true,
    capacity: 3,
    IsForPredator: true
  }

  function CheckCage(animal: Animal, cage: Settlement) {
    let count: number = 0;
    if (animal.reservoir == cage.reservior && animal.biome == cage.biome && animal.IsPredator == cage.IsForPredator) {
      for (let j = 0; j < cage.totalAnimals.length; j++) {
        count = count + 1;
      }
      if (cage.capacity > count) {
        cage.totalAnimals.push(animal);
  
  
      }
      else {
        console.log("there are not enough space in this cage");
      }
    }
    else {
      console.log(`This cage is not avilable for  -${animal.name}-  animal`);
    }
  }
  function ShowAllNamesInCage(cage: Settlement) {
    for (let i = 0; i < cage.totalAnimals.length; i++) {
      console.log(cage.totalAnimals[i].name);
    }
  }
  
  CheckCage(Rabbit, CageForRabbit);
  CheckCage(Leon, CageForLeon);
  ShowAllNamesInCage(CageForRabbit);