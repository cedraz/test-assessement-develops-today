class PopulationCounts {
  year: number;
  value: number;
}

export class Population {
  error: boolean;
  msg: string;
  data: [
    {
      country: string;
      code: string;
      iso3: string;
      populationCounts: PopulationCounts[];
    },
  ];
}
