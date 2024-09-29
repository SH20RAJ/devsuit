import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function JoinUS() {
  return (
    <div className="mx-auto max-w-[350px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Join Us</h1>
        <p className="text-gray-500 dark:text-gray-400">Create an account to get started</p>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <Button variant="outline">
          {/* <Icons.google className="mr-2 h-4 w-4" /> */}
          Google
        </Button>
        <Button variant="outline">
          {/* <Icons.gitHub className="mr-2 h-4 w-4" /> */}
          GitHub
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link className="underline" href="#">
          Log in
        </Link>
      </div>
    </div>
  )
}

