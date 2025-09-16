export const formFields = [
  {
    name: 'name',
    label: 'Nome',
    type: 'text',
    required: true,
    autoComplete: 'given-name'
  },
  {
    name: 'surname',
    label: 'Sobrenome',
    type: 'text',
    required: true,
    autoComplete: 'family-name'
  },
  {
    name: 'cpf',
    label: 'CPF',
    type: 'text',
    required: true,
    autoComplete: 'off'
  },
  {
    name: 'birthdate',
    label: 'Data de Nascimento',
    type: 'date',
    required: true,
    autoComplete: 'bday'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    autoComplete: 'email'
  }
];

export const genderOptions = [
  { value: 'male', label: 'Masculino' },
  { value: 'female', label: 'Feminino' },
  { value: 'other', label: 'Outro' }
];