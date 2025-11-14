import LoginForm from "@/components/forms/LoginForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CandidatesLoginPage() {
  return (
    <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center mx-auto py-32 px-16 bg-white dark:bg-black gap-3">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white text-center mb-4">
        Bienvenue sur l&apos;espace
        <span className="text-violet-600"> candidat!</span>
      </h1>
      <LoginForm />
      <div className="flex flex-row items-center">
        <p>Pas encore inscrit ?</p>
        <Button variant="link" className="ml-2 p-0">
          <Link href="/candidates/register">S&apos;inscrire</Link>
        </Button>
      </div>
    </main>
  );
}
