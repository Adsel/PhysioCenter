export interface AuthModeCard {
  header: string;
  title: string;
  text: string;
  href: string;
}

export interface LoginData {
  login: string;
  password: string;
}

export const USER_TYPE = {
  PATIENT: 0,
  PHYSIO: 1
};

export interface User {
  userId: number;
  login: string;
  password: string;
  physioId: number;
  patientId: number;
  isPhysio: boolean;
}
