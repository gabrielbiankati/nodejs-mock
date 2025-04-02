export const users = new Map();

export function seedUserStore() {   
  users.set('alisson@cesul.com.br', {
      password: '123456',
      permissions: ['users.read', 'users.write'],
      roles: ['administrador'],
  });
}