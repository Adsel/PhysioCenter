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

export interface RegistrationData {
  login: string;
  password: string;
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  peselNo: string;
}

export interface RegisterPatientUserResponse {
  message: string;
  userDto: User;
}

export interface UserLoginStatus {
  message: string;
  user: User;
}

export interface PasswordData {
  password: string;
}

export interface User {
  userId: number;
  login: string;
  password: string;
  physioId: number;
  patientId: number;
  isPhysio: boolean;
}

export interface Patient {
  patientId: number;
  name?: string;
  surname?: string;
  phoneNumber?: string;
  email?: string;
  peselNo?: string;
}

export interface Physio {
  physioId: number;
  name?: string;
  surname?: string;
  phoneNumber?: string;
  email?: string;
  licenceNo?: string;
}

export interface Message {
  messageId: number;
  patientId: number;
  physioId: number;
  directionToPhysio: boolean;
  message: string;
  createdAt: Date;
}

export interface LastMessageList {
  lastMessages: MessageObject[];
}

export interface AddMessageDTO {
  patientId: number;
  physioId: number;
  directionToPhysio: boolean;
  message: string;
}

export interface MessageObject {
  message: Message;
  patient: Patient;
  physio: Physio;
}
