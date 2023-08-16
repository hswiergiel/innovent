import { createConnection } from 'typeorm';
import { User } from './path-to-your-user-entity';

const seed = async () => {
  const connection = await createConnection(); // Établir la connexion à la base de données
  const userRepository = connection.getRepository(User); // Obtenir le référentiel (repository) des utilisateurs

  const usersToSeed = [
    // Liste des utilisateurs à insérer
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // ...
  ];

  await userRepository.save(usersToSeed); // Insérer les utilisateurs dans la base de données

  await connection.close(); // Fermer la connexion
};

seed().catch(error => console.error(error));
