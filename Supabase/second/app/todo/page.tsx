import React from "react";
import CreateForm from "./components/CreateForm";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";
import SignOut from "./components/SignOut";
import { deleteTodoById, readTodo, updateTodoById } from "./actions";

export default async function Page() {
    // const todos = [
    // 	{
    // 		title: "Subscribe",
    // 		created_by: "091832901830",
    // 		id: "101981908",
    // 		completed: false,
    // 	},
    // ];

    const {
        data: { session },
    } = await readUserSession();
    if (!session) {
        return redirect("/auth-server-action");
    }

    const { data: todos } = await readTodo();

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 space-y-5">
                <SignOut />
                <CreateForm />

                {todos?.map((todo, index) => {

					const deleteToDo = deleteTodoById.bind(null, todo.id);
					const updateToDo = updateTodoById.bind(null, todo.id, !todo.completed);

                    return (
                        <div key={index} className="flex items-center gap-6">
                            <h1
                                className={cn({
                                    "line-through": todo.completed,
                                })}
                            >
                                {todo.title}
                            </h1>

                            <form action={deleteToDo}>
                                <Button>Delete</Button>
                            </form>
                            <form action={updateToDo}>
                                <Button>Update</Button>
                            </form>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
