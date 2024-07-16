export interface PaymentDetail {
  id?: string | undefined;
  payment: {
    id: string | undefined;
    manager?: {
      id: string | undefined;
      firstName: string | undefined;
      lastName: string | undefined;
    } | undefined;
    description: string | undefined;
    dueDate: string | undefined;
    date: string | undefined;
    amount: string | undefined;
    status: string | undefined;
    className?: string | undefined;
  } | undefined;
  maleAttorney?: {
    id: string | undefined;
    names: string | undefined;
    surnames: string | undefined;
    sex: string | undefined;
    birthDate?: string | undefined;
    baptism: string | undefined;
    firstCommunion?: string | undefined;
    confirmation: string | undefined;
    marriage: string | undefined;
    relationship: string | undefined;
    email: string | undefined;
    cellphone: string | undefined;
    address: string | undefined;
    documentType: string | undefined;
    documentNumber: string | undefined;
    status: string | undefined;
  } | undefined;
  femaleAttorney?: {
    id: string | undefined;
    names: string | undefined;
    surnames: string | undefined;
    sex: string | undefined;
    birthDate?: string | undefined;
    baptism: string | undefined;
    firstCommunion?: string | undefined;
    confirmation: string | undefined;
    marriage: string | undefined;
    relationship: string | undefined;
    email: string | undefined;
    cellphone: string | undefined;
    address: string | undefined;
    documentType: string | undefined;
    documentNumber: string | undefined;
    status: string | undefined;
  } | undefined;
  student: {
    id: string | undefined;
    name: string | undefined;
    lastName: string | undefined;
    documentType: string | undefined;
    documentNumber: string | undefined;
    gender: string | undefined;
    birthdate?: string | undefined;
    baptism: string | undefined;
    communion: string | undefined;
    email: string | undefined;
    birthPlace: string | undefined;
    level: string | undefined;
    grade: string | undefined;
    section: string | undefined;
    status: string | undefined;
  } | undefined;
  amount: string | undefined;
  date: string | undefined;
  paymentType: string | undefined;
  status: string | undefined;
  className?: string | undefined;
}
