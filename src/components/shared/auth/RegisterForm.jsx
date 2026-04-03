import * as React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

const formSchema = z
    .object({
        username: z.string().min(2, { error: "Username must be at least 2 characters." }),
        email: z.email({ error: "Please enter a valid email address." }),
        password: z.string().min(6, { error: "Password must be at least 6 characters long." }),
        confirmPassword: z.string().min(6, { error: "Confirm password must be at least 6 characters long." }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        error: "Passwords don't match.",
        path: ["confirmPassword"],
    });

const RegisterForm = () => {
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    function onSubmit(data) {
        console.log(data);
        toast.success("Success", {
            description: "Your account has been created successfully.",
        });
        navigate("/dashboard");
    }

    return (
        <form className="w-96 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="text-center">
                <h1 className="text-primary font-bold text-2xl mb-1">
                    Create an account
                </h1>
                <p className="text-muted-foreground">
                    Enter your information below to register.
                </p>
            </div>

            <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Username</FieldLabel>
                        <Input
                            {...field}
                            aria-invalid={fieldState.invalid}
                            placeholder="Username..."
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />

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

            <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel>Confirm Password</FieldLabel>
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
                Register
            </Button>
        </form>
    );
};

export default RegisterForm;