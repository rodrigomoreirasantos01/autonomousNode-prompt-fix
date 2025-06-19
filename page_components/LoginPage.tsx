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
import { accountStorage } from "@/lib/accountStorage";
import { findStoredAccount } from "@/lib/findStoredAccount";

type LoginPageProps = {
  onLoginSuccess: () => void;
};

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifPassword, setVerifPassword] = useState("");

  const handleLogin = () => {
    onLoginSuccess();
  };
  //when email and password are typed:
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (await findStoredAccount(email, password)) {
      handleLogin();
    } else if (password !== verifPassword) {
      alert("Passwords do not match! or Make sure to sign up");
      return;
    }
    //Push the email and password to Table:
    accountStorage(email, password);
    //approve the redirect:
    handleLogin();
  };

  return (
    <div className="w-[450px] m-auto flex-col">
      <Card className="bg-black text-white">
        <CardHeader className="text-center border-b border-[#272c33]">
          <CardTitle>{click ? "Sign Up" : "Login"}</CardTitle>
          <CardDescription className="text-gray-300">
            {click
              ? "Create an account below"
              : "Enter your Email and Password below"}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          <div className="grid gap-4">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="grid gap-2">
                <Label>Email</Label>
                <Input
                  id="Email"
                  name="Email"
                  type="email"
                  placeholder="Johndoe123@mail.com"
                  className="text-white border-[#272c33]"
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="text-white border-[#272c33]"
                  onChange={(e) => setPassword(e.target.value)}
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
                    className="text-white border-[#272c33]"
                    onChange={(e) => setVerifPassword(e.target.value)}
                    required
                  />
                </div>
              )}

              <Button type="submit" className="w-full">
                {click ? "Sign Up" : "Login"}
              </Button>
            </form>
          </div>
        </CardContent>

        <CardFooter className="border-t border-[#272c33] text-center text-sm text-gray-400 py-4">
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
