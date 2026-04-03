import React from "react";
import { Cross, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Aside = () => {
    return (
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-b from-green-950 to-green-900 flex-col justify-between hidden p-10">
            <div className="flex items-center gap-2">
                <div className="p-2 bg-white rounded-xl text-primary">
                    <Cross className="size-6" />
                </div>
                <span className="text-white text-xl font-bold">Medoria</span>
            </div>
            <div className="space-y-1 text-white">
                <h1 className="font-bold text-4xl font-sans">Medoria</h1>
                <p>The most complete Clinic Management System</p>
                <Button variant="secondary" asChild className="mt-3">
                    <Link to="/">Home</Link>
                </Button>
            </div>
        </div>
    );
};

export default Aside;