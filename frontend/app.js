// API Base URL
const API_URL = 'http://localhost:3000/api';

// Helper function: API çağrısı
async function apiCall(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Token varsa ekle
    const token = localStorage.getItem('token');
    if (token) {
        defaultOptions.headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultOptions.headers,
            ...options.headers,
        },
    };

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Bir hata oluştu');
        }

        return data;
    } catch (error) {
        throw error;
    }
}

// Auth Functions
async function register(username, email, password) {
    return await apiCall('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
    });
}

async function login(email, password) {
    return await apiCall('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    });
}

// Item Functions
async function getAllItems(page = 1, limit = 10) {
    return await apiCall(`/items?page=${page}&limit=${limit}`, {
        method: 'GET',
    });
}

async function getItemById(id) {
    return await apiCall(`/items/${id}`, {
        method: 'GET',
    });
}

async function createItem(title, description = '') {
    return await apiCall('/items', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
    });
}

async function updateItem(id, title, description, isCompleted) {
    return await apiCall(`/items/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description, isCompleted }),
    });
}

async function deleteItem(id) {
    return await apiCall(`/items/${id}`, {
        method: 'DELETE',
    });
}

// User Functions
async function getProfile() {
    return await apiCall('/users/profile', {
        method: 'GET',
    });
}

