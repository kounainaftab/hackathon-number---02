// User type based on data-model.md
export interface User {
  id: string;
  email: string;
  name?: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Todo type based on data-model.md
export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  userId: string;
}

// AuthSession type based on data-model.md
export interface AuthSession {
  token: string;
  userId: string;
  expiresAt: string; // ISO date string
  createdAt: string; // ISO date string
}

// UIState type based on data-model.md
export interface UIState {
  currentView: 'signin' | 'signup' | 'dashboard';
  loading: boolean;
  error?: string;
  success?: string;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// API Request types
export interface CreateTodoRequest {
  title: string;
  description?: string;
  completed?: boolean;
}

export interface UpdateTodoRequest {
  title?: string;
  description?: string;
  completed?: boolean;
}

export interface SignUpRequest {
  email: string;
  name: string;
  password: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

// Form validation types
export interface TodoFormValues {
  title: string;
  description?: string;
}

export interface AuthFormValues {
  email: string;
  password: string;
}
