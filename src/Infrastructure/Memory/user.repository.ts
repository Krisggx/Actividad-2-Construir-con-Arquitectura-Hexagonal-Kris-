import { User } from "../../Domain/Entities/user.js";
import { UserRepository } from "../../Domain/Ports/user.repository.js";

type MemoryUser = User & {
	id: number;
	createdAt: string;
};

export class InMemoryUserRepository implements UserRepository {
	private users: MemoryUser[] = [];
	private nextId = 1;

	getAll(): User[] {
		return this.users;
	}

	findById(id: number): User | undefined {
		return this.users.find((user) => user.id === id);
	}

	create(user: User): User {
		const storedUser: MemoryUser = Object.assign(user, {
			id: this.nextId++,
			createdAt: new Date().toISOString()
		});

		this.users.push(storedUser);
		return storedUser;
	}

	delete(id: number): void {
		this.users = this.users.filter((user) => user.id !== id);
	}

	async update(user: User): Promise<void> {
		const index = this.users.findIndex((stored) => stored.email === user.email);

		if (index === -1) {
			throw new Error("usuario no encontrado");
		}

		Object.assign(this.users[index]!, user);
	}
}

