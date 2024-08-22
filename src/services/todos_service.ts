import { todosRepository } from "@repositories";

export async function getTodos() {
  try {
    return await todosRepository.getTodos();
  } catch (err) {
    console.error(err);
  }
}
