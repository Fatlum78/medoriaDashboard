import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

const formSchema = z.object({
    email: z.email({ error: "Please enter a valid email address." }),
    password: z.string().min(6, { error: "Password must be at least 6 characters long." }),
});

const LoginForm = () => {
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(data) {
        console.log(data);
        toast.success("Success", {
            description: "You have been logged in successfully.",
        });
        navigate("/dashboard");
    }

    return (
        <form className="w-96 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="text-center">
                <h1 className="text-primary font-bold text-2xl mb-1">Login</h1>
                <p className="text-muted-foreground">
                    Welcome back, please login to continue.
                </p>
            </div>

            <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Email</FieldLabel>
                        <Input
                            {...field}
                            aria-invalid={fieldState.invalid}
                            placeholder="Email..."
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />

            <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Password</FieldLabel>
                        <Input
                            {...field}
                            type="password"
                            aria-invalid={fieldState.invalid}
                            placeholder="••••••••"
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />

            <Button type="submit" className="w-full">
                Login
            </Button>
        </form>
    );
};

export default LoginForm;