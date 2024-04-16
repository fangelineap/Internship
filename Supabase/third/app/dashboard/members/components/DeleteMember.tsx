"use client";

import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import React, { useTransition } from "react";
import { deleteMemberById } from "../actions";
import { toast } from "@/components/ui/use-toast";

const DeleteMember = ({ user_id }: { user_id: string }) => {
    const [isPending, startTransition] = useTransition();

    const onSubmit = () => {
        startTransition(async () => {
            const res = JSON.parse(await deleteMemberById(user_id));
            if(res?.error?.message) {
                toast({
                    title: "Fail to delete",
                })
            }
            else {
                toast({
                    title: "Deleted successfully",
                })
            }
        })
    };

    return (
        <form action={onSubmit}>
            <Button variant="outline">
                <TrashIcon />
                Delete
            </Button>{" "}
        </form>
    );
};

export default DeleteMember;
