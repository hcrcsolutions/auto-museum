import type { Metadata } from "next";
import PortalHeader from "@/components/layout/PortalHeader";
import SteeringWheel from "@/components/SteeringWheel";
import PortalFooter from "@/components/layout/PortalFooter";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Member Login",
  description:
    "Log in to your Motor Legacy Center member account to manage tickets, membership, and storage services.",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortalHeader />

      <div className="flex min-h-[80vh] items-center justify-center px-6 pt-24">
        <Container className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center gap-6 text-center">
              <SteeringWheel className="h-14 w-14 text-gold" />

              <div>
                <h1 className="font-serif text-3xl font-bold sm:text-4xl">
                  Member <span className="text-gold">Login</span>
                </h1>
                <div className="relative mx-auto mt-3 h-px w-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold to-transparent" />
                  <div className="absolute -inset-y-1 inset-x-4 bg-gradient-to-r from-transparent via-gold/40 to-transparent blur-sm" />
                </div>
              </div>

              <Badge>Coming Soon</Badge>

              <p className="text-foreground/60">
                The Motor Legacy Center member portal is currently under
                development. Soon you&apos;ll be able to manage your
                membership, purchase tickets, access storage services, and
                more from a single account.
              </p>

              <div className="w-full space-y-4 rounded-lg border border-foreground/5 bg-charcoal-dark/30 p-6">
                <div>
                  <label className="mb-1 block text-left text-sm text-foreground/40">
                    Email Address
                  </label>
                  <input
                    type="email"
                    disabled
                    placeholder="member@example.com"
                    className="w-full rounded-lg border border-foreground/10 bg-charcoal-dark/50 px-4 py-3 text-foreground/30 placeholder:text-foreground/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-left text-sm text-foreground/40">
                    Password
                  </label>
                  <input
                    type="password"
                    disabled
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-foreground/10 bg-charcoal-dark/50 px-4 py-3 text-foreground/30 placeholder:text-foreground/20"
                  />
                </div>
                <Button className="w-full cursor-not-allowed opacity-50">
                  Sign In
                </Button>
              </div>

              <p className="text-sm text-foreground/40">
                Need help?{" "}
                <a
                  href="/contact"
                  className="text-gold transition-colors hover:text-gold-light"
                >
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </Container>
      </div>

      <PortalFooter />
    </div>
  );
}
