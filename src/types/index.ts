export enum CourseDifficulty {
  BEGINER = 'BEGINER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
}

export type ModalDataType = {
  difficulty: CourseDifficulty;
  period?: string;
  description?: string;
  destination?: string;
  price?: string;
};
