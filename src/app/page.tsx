
import { Beneficiaries } from "@/components/landing/benificiaries";
import { Cta } from "@/components/landing/cta";
import { Hero } from "@/components/landing/hero";
import { Impact } from "@/components/landing/impact";
import { Problem } from "@/components/landing/problems";
import { Solutions } from "@/components/landing/solutions";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-background ">
      <Hero />
      <Problem />
      <Impact />
      <Solutions />
      <Beneficiaries />
      {/* <Cta /> */}
    </main>
    </div>
  );
}
