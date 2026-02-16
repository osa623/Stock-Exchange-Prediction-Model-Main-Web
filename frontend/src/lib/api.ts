/**
 * API Client for Backend Communication
 * 
 * Handles all authenticated requests to the FastAPI backend.
 * Automatically attaches Firebase ID tokens and handles common errors.
 */

import { auth } from './firebase';
import {
  UserMeResponse,
  RegisterUserRequest,
  UpdateProfileRequest,
  OnboardingRequest,
  PinVerifyResponse,
  SecurityEventResponse,
  ErrorResponse,
  RateLimitError,
} from './types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:9000';

/**
 * Generic API fetch wrapper with authentication and error handling
 */
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  // Get fresh Firebase ID token
  const user = auth.currentUser;
  if (!user) {
    throw new Error('User not authenticated');
  }

  const token = await user.getIdToken();

  // Prepare headers
  const headers = new Headers(options.headers);
  headers.set('Authorization', `Bearer ${token}`);
  headers.set('Content-Type', 'application/json');

  // Make the request
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Handle rate limiting
  if (response.status === 429) {
    const retryAfter = parseInt(response.headers.get('Retry-After') || '0', 10);
    const errorData: ErrorResponse = await response.json().catch(() => ({ detail: 'Rate limited' }));
    throw new RateLimitError(errorData.detail, retryAfter);
  }

  // Handle unauthorized - sign out and redirect
  if (response.status === 401) {
    await auth.signOut();
    if (typeof window !== 'undefined') {
      window.location.href = '/welcome-page/login-page';
    }
    throw new Error('Unauthorized - Session expired');
  }

  // Handle other errors
  if (!response.ok) {
    const errorData: ErrorResponse = await response.json().catch(() => ({ detail: 'An error occurred' }));
    throw new Error(errorData.detail);
  }

  // Handle no-content responses
  if (response.status === 204) {
    return undefined as T;
  }

  // Parse and return JSON
  return response.json();
}

/**
 * Register a new user in the backend database
 * POST /users/me/register
 */
export async function registerUser(data: RegisterUserRequest): Promise<UserMeResponse> {
  return apiFetch<UserMeResponse>('/users/me/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

/**
 * Get current authenticated user's profile
 * GET /users/me
 */
export async function getMe(): Promise<UserMeResponse> {
  return apiFetch<UserMeResponse>('/users/me', {
    method: 'GET',
  });
}

/**
 * Update current user's profile
 * PATCH /users/me
 */
export async function updateProfile(data: UpdateProfileRequest): Promise<UserMeResponse> {
  return apiFetch<UserMeResponse>('/users/me', {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

/**
 * Set or replace onboarding preferences
 * PUT /users/me/onboarding
 */
export async function updateOnboarding(data: OnboardingRequest): Promise<UserMeResponse> {
  return apiFetch<UserMeResponse>('/users/me/onboarding', {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

/**
 * Set or change the user's 6-digit security PIN
 * PUT /users/me/pin
 */
export async function setPin(pin: string): Promise<void> {
  return apiFetch<void>('/users/me/pin', {
    method: 'PUT',
    body: JSON.stringify({ pin }),
  });
}

/**
 * Verify the user's PIN
 * POST /users/me/pin/verify
 */
export async function verifyPin(pin: string): Promise<PinVerifyResponse> {
  return apiFetch<PinVerifyResponse>('/users/me/pin/verify', {
    method: 'POST',
    body: JSON.stringify({ pin }),
  });
}

/**
 * Get recent security events for the authenticated user
 * GET /users/me/security-events
 */
export async function getSecurityEvents(): Promise<SecurityEventResponse[]> {
  return apiFetch<SecurityEventResponse[]>('/users/me/security-events', {
    method: 'GET',
  });
}
