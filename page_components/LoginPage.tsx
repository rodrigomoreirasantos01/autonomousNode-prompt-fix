"use client";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  const [click, setClick] = useState(false);

  return (
    <div className="w-[450px] m-auto flex-col">
      <Card className="bg-black text-white">
        <CardHeader className="text-center border-b border-gray-800">
          <CardTitle>{click ? "Sign Up" : "Login"}</CardTitle>
          <CardDescription className="text-gray-300">
            {click
              ? "Create an account below"
              : "Enter your Email and Password below"}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          <div className="grid gap-4">
            {/* Email */}
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input
                id="Email"
                name="Email"
                type="email"
                placeholder="Johndoe123@mail.com"
                className="text-white border-gray-800"
                required
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="text-white border-gray-800"
                required
              />
            </div>

            {/* Verify Password */}
            {click && (
              <div className="grid gap-2">
                <Label htmlFor="password">Verify Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="text-white border-gray-800"
                  required
                />
              </div>
            )}

            <Button type="submit" className="w-full">
              {click ? "Sign Up" : "Login"}
            </Button>
          </div>
        </CardContent>

        <CardFooter className="border-t border-gray-800 text-center text-sm text-gray-400 py-4">
          <p>
            {click ? "Already have an account? " : "Don't have an account? "}
            <a
              href="#"
              className="text-yellow-400 underline underline-offset-4"
              onClick={() => setClick(!click)}
            >
              {click ? "Sign in" : "Sign up now"}
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
