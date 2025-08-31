
export interface Cliente {
  id: number
  nome: string
  email: string
  telefone: string
  cep: string
  endereco: string
  created_at: string
  updated_at: string
}

export interface Agendamento {
  id: number
  cliente_id: number
  cliente?: Cliente
  tipo_servico: string
  frequencia: string
  data_preferida: string
  horario_preferido: string
  area_m2?: number
  observacoes?: string
  status: 'pendente' | 'confirmado' | 'em_andamento' | 'concluido' | 'cancelado'
  preco?: number
  created_at: string
  updated_at: string
}

export interface Funcionario {
  id: number
  nome: string
  email: string
  telefone: string
  cargo: string
  salario: number
  data_admissao: string
  status: 'ativo' | 'inativo'
  created_at: string
  updated_at: string
}

export interface Contato {
  id: number
  nome: string
  email: string
  telefone?: string
  assunto: string
  endereco?: string
  mensagem: string
  status: 'novo' | 'lido' | 'respondido'
  created_at: string
  updated_at: string
}

export interface DashboardStats {
  agendamentos_hoje: number
  agendamentos_pendentes: number
  clientes_total: number
  funcionarios_ativos: number
  receita_mensal: number
}

export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
}

export interface BookingFormData {
  nome: string
  email: string
  telefone: string
  cep: string
  endereco: string
  tipo_servico: string
  frequencia: string
  data_preferida: string
  horario_preferido: string
  area_m2?: number
  observacoes?: string
  aceite: boolean
}

export interface ContactFormData {
  nome: string
  email: string
  telefone?: string
  assunto: string
  endereco?: string
  mensagem: string
  aceite: boolean
}
