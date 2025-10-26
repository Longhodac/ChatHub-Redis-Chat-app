import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { MessageSquare, Shield, Zap } from "lucide-react";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (await isAuthenticated()) return redirect("/");

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 md:px-12 lg:px-20">
        <div className="max-w-2xl w-full space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-foreground rounded-xl flex items-center justify-center">
              <MessageSquare className="w-7 h-7 text-background" />
            </div>
            <span className="text-2xl font-semibold tracking-tight">
              FastChat
            </span>
          </div>

          {/* Hero Text */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
              Lightning-fast,
              <br />
              secure messaging
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl text-balance leading-relaxed">
              Experience real-time communication built on Redis. Fast, reliable,
              and secure by design.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="/api/auth/register">Get Started</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent"
              asChild
            >
              <Link href="/api/auth/login">Sign In</Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold">Ultra Fast</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Redis-powered infrastructure for instant message delivery
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-semibold">Secure</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                End-to-end encryption keeps your conversations private
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-semibold">Real-time</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See messages as they arrive with live updates
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 relative overflow-hidden bg-muted/20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-muted/30 to-background" />

        {/* Floating chat visualization */}
        <div className="absolute inset-0 flex items-center justify-center p-16">
          <div className="relative w-full h-full max-w-md">
            {/* Chat bubble 1 - Top left */}
            <div className="absolute top-[10%] left-[5%] animate-float">
              <div className="w-56 px-5 py-4 rounded-3xl rounded-tl-sm bg-foreground/5 backdrop-blur-sm border border-foreground/10">
                <div className="space-y-2">
                  <div className="h-2 bg-foreground/10 rounded-full w-3/4" />
                  <div className="h-2 bg-foreground/10 rounded-full w-1/2" />
                </div>
              </div>
            </div>

            {/* Chat bubble 2 - Top right */}
            <div className="absolute top-[25%] right-[8%] animate-float-delayed">
              <div className="w-48 px-5 py-4 rounded-3xl rounded-tr-sm bg-foreground/10 backdrop-blur-sm border border-foreground/10">
                <div className="space-y-2">
                  <div className="h-2 bg-foreground/15 rounded-full w-full" />
                  <div className="h-2 bg-foreground/15 rounded-full w-2/3" />
                </div>
              </div>
            </div>

            {/* Chat bubble 3 - Middle left */}
            <div className="absolute top-[45%] left-[10%] animate-float">
              <div className="w-52 px-5 py-4 rounded-3xl rounded-tl-sm bg-foreground/5 backdrop-blur-sm border border-foreground/10">
                <div className="space-y-2">
                  <div className="h-2 bg-foreground/10 rounded-full w-4/5" />
                </div>
              </div>
            </div>

            {/* Chat bubble 4 - Middle right */}
            <div className="absolute top-[60%] right-[5%] animate-float-delayed">
              <div className="w-60 px-5 py-4 rounded-3xl rounded-tr-sm bg-foreground/10 backdrop-blur-sm border border-foreground/10">
                <div className="space-y-2">
                  <div className="h-2 bg-foreground/15 rounded-full w-full" />
                  <div className="h-2 bg-foreground/15 rounded-full w-3/4" />
                  <div className="h-2 bg-foreground/15 rounded-full w-1/2" />
                </div>
              </div>
            </div>

            {/* Chat bubble 5 - Bottom left */}
            <div className="absolute bottom-[15%] left-[8%] animate-float">
              <div className="w-44 px-5 py-4 rounded-3xl rounded-tl-sm bg-foreground/5 backdrop-blur-sm border border-foreground/10">
                <div className="space-y-2">
                  <div className="h-2 bg-foreground/10 rounded-full w-full" />
                </div>
              </div>
            </div>

            {/* Central message icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-24 rounded-2xl bg-background border-2 border-foreground/10 flex items-center justify-center shadow-xl">
                <MessageSquare className="w-12 h-12 text-foreground/30" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-[20%] right-[30%] w-3 h-3 rounded-full bg-foreground/10 animate-pulse" />
            <div
              className="absolute bottom-[35%] left-[25%] w-2 h-2 rounded-full bg-foreground/10 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-[75%] right-[40%] w-2.5 h-2.5 rounded-full bg-foreground/10 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/5 pointer-events-none" />
      </div>
    </div>
  );
};

export default page;
