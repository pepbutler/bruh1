"use client" // This is from the form piece of shadcn code
import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"





export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Models
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Tasks
          </Link>
          <Link
            href="/train"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Train
          </Link>
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/settings">Settings</Link> </DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {/* I'm editing here!!!!!!!!!!!!!!!!!! */}
          <Card x-chunk="A card showing the total revenue in USD and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Task ID</CardTitle>
              {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <Input id="picture" type="text" placeholder = "10"/>
            </CardContent>
          </Card>
          <Card x-chunk="A card showing the total subscriptions and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hugging face repository ID</CardTitle>
              {/* <Users className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <Input id="picture" type="text" placeholder = "username/repository-name" />
            </CardContent>
          </Card>
          <Card x-chunk="A card showing the total sales and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Base model</CardTitle>
              {/* <CreditCard className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Qwen/Qwen1.5-0.5B">Qwen/Qwen1.5-0.5B</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-0.5B-Chat">Qwen/Qwen1.5-0.5B-Chat</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-1.8B">Qwen/Qwen1.5-1.8B</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-1.8B-Chat">Qwen/Qwen1.5-1.8B-Chat</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-4B">Qwen/Qwen1.5-4B</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-4B-Chat">Qwen/Qwen1.5-4B-Chat</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-7B">Qwen/Qwen1.5-7B</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-7B-Chat">Qwen/Qwen1.5-7B-Chat</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-14B">Qwen/Qwen1.5-14B</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-14B-Chat">Qwen/Qwen1.5-14B-Chat</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-32B">Qwen/Qwen1.5-32B</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-32B-Chat">Qwen/Qwen1.5-32B-Chat</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-72B">Qwen/Qwen1.5-72B</SelectItem>
                  <SelectItem value="Qwen/Qwen1.5-72B-Chat">Qwen/Qwen1.5-72B-Chat</SelectItem>
                  <SelectItem value="Qwen/Qwen2-0.5B">Qwen/Qwen2-0.5B</SelectItem>
                  <SelectItem value="Qwen/Qwen2-0.5B-Instruct">Qwen/Qwen2-0.5B-Instruct</SelectItem>
                  <SelectItem value="Qwen/Qwen2-1.5B">Qwen/Qwen2-1.5B</SelectItem>
                  <SelectItem value="Qwen/Qwen2-1.5B-Instruct">Qwen/Qwen2-1.5B-Instruct</SelectItem>
                  <SelectItem value="Qwen/Qwen2-7B">Qwen/Qwen2-7B</SelectItem>
                  <SelectItem value="Qwen/Qwen2-7B-Instruct">Qwen/Qwen2-7B-Instruct</SelectItem>
                  <SelectItem value="Qwen/Qwen2-72B">Qwen/Qwen2-72B</SelectItem>
                  <SelectItem value="Qwen/Qwen2-72B-Instruct">Qwen/Qwen2-72B-Instruct</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-0.5B">Qwen/Qwen2.5-0.5B</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-0.5B-Instruct">Qwen/Qwen2.5-0.5B-Instruct</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-1.5B">Qwen/Qwen2.5-1.5B</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-1.5B-Instruct">Qwen/Qwen2.5-1.5B-Instruct</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-3B">Qwen/Qwen2.5-3B</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-3B-Instruct">Qwen/Qwen2.5-3B-Instruct</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-7B">Qwen/Qwen2.5-7B</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-7B-Instruct">Qwen/Qwen2.5-7B-Instruct</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-14B">Qwen/Qwen2.5-14B</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-14B-Instruct">Qwen/Qwen2.5-14B-Instruct</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-32B">Qwen/Qwen2.5-32B</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-32B-Instruct">Qwen/Qwen2.5-32B-Instruct</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-72B">Qwen/Qwen2.5-72B</SelectItem>
                  <SelectItem value="Qwen/Qwen2.5-72B-Instruct">Qwen/Qwen2.5-72B-Instruct</SelectItem>
                  <SelectItem value="01-ai/Yi-6B">01-ai/Yi-6B</SelectItem>
                  <SelectItem value="01-ai/Yi-6B-Chat">01-ai/Yi-6B-Chat</SelectItem>
                  <SelectItem value="01-ai/Yi-9B">01-ai/Yi-9B</SelectItem>
                  <SelectItem value="01-ai/Yi-9B-Chat">01-ai/Yi-9B-Chat</SelectItem>
                  <SelectItem value="01-ai/Yi-34B">01-ai/Yi-34B</SelectItem>
                  <SelectItem value="01-ai/Yi-34B-Chat">01-ai/Yi-34B-Chat</SelectItem>
                  <SelectItem value="01-ai/Yi-1.5-6B">01-ai/Yi-1.5-6B</SelectItem>
                  <SelectItem value="01-ai/Yi-1.5-6B-Chat">01-ai/Yi-1.5-6B-Chat</SelectItem>
                  <SelectItem value="01-ai/Yi-1.5-9B">01-ai/Yi-1.5-9B</SelectItem>
                  <SelectItem value="01-ai/Yi-1.5-9B-Chat">01-ai/Yi-1.5-9B-Chat</SelectItem>
                  <SelectItem value="01-ai/Yi-1.5-34B">01-ai/Yi-1.5-34B</SelectItem>
                  <SelectItem value="01-ai/Yi-1.5-34B-Chat">01-ai/Yi-1.5-34B-Chat</SelectItem>
                  <SelectItem value="mistralai/Mistral-7B-v0.1">mistralai/Mistral-7B-v0.1</SelectItem>
                  <SelectItem value="mistralai/Mistral-7B-v0.3">mistralai/Mistral-7B-v0.3</SelectItem>
                  <SelectItem value="mistralai/Mistral-7B-Instruct-v0.1">mistralai/Mistral-7B-Instruct-v0.1</SelectItem>
                  <SelectItem value="mistralai/Mistral-7B-Instruct-v0.2">mistralai/Mistral-7B-Instruct-v0.2</SelectItem>
                  <SelectItem value="mistralai/Mistral-7B-Instruct-v0.3">mistralai/Mistral-7B-Instruct-v0.3</SelectItem>
                  <SelectItem value="mistralai/Mixtral-8x7B-v0.1">mistralai/Mixtral-8x7B-v0.1</SelectItem>
                  <SelectItem value="mistralai/Mixtral-8x7B-Instruct-v0.1">mistralai/Mixtral-8x7B-Instruct-v0.1</SelectItem>
                  <SelectItem value="google/gemma-2b">google/gemma-2b</SelectItem>
                  <SelectItem value="google/gemma-7b">google/gemma-7b</SelectItem>
                  <SelectItem value="google/gemma-2b-it">google/gemma-2b-it</SelectItem>
                  <SelectItem value="google/gemma-2b-it">google/gemma-2b-it</SelectItem>
                  <SelectItem value="google/gemma-7b-it">google/gemma-7b-it</SelectItem>
                  <SelectItem value="google/gemma-2-2b">google/gemma-2-2b</SelectItem>
                  <SelectItem value="google/gemma-2-9b">google/gemma-2-9b</SelectItem>
                  <SelectItem value="google/gemma-2-27b">google/gemma-2-27b</SelectItem>
                  <SelectItem value="google/gemma-2-2b-it">google/gemma-2-2b-it</SelectItem>
                  <SelectItem value="google/gemma-2-9b-it">google/gemma-2-9b-it</SelectItem>
                  <SelectItem value="google/gemma-2-27b-it">google/gemma-2-27b-it</SelectItem>
                  <SelectItem value="HuggingFaceH4/zephyr-7b-alpha">HuggingFaceH4/zephyr-7b-alpha</SelectItem>
                  <SelectItem value="HuggingFaceH4/zephyr-7b-beta">HuggingFaceH4/zephyr-7b-beta</SelectItem>
                  <SelectItem value="meta-llama/Llama-2-7b-hf">meta-llama/Llama-2-7b-hf</SelectItem>
                  <SelectItem value="meta-llama/Llama-2-13b-hf">meta-llama/Llama-2-13b-hf</SelectItem>
                  <SelectItem value="meta-llama/Llama-2-70b-hf">meta-llama/Llama-2-70b-hf</SelectItem>
                  <SelectItem value="meta-llama/Llama-2-7b-chat-hf">meta-llama/Llama-2-7b-chat-hf</SelectItem>
                  <SelectItem value="meta-llama/Llama-2-13b-chat-hf">meta-llama/Llama-2-13b-chat-hf</SelectItem>
                  <SelectItem value="meta-llama/Llama-2-70b-chat-hf">meta-llama/Llama-2-70b-chat-hf</SelectItem>
                  <SelectItem value="meta-llama/Meta-Llama-3-8B">meta-llama/Meta-Llama-3-8B</SelectItem>
                  <SelectItem value="meta-llama/Meta-Llama-3-8B-Instruct">meta-llama/Meta-Llama-3-8B-Instruct</SelectItem>
                  <SelectItem value="meta-llama/Meta-Llama-3-70B">meta-llama/Meta-Llama-3-70B</SelectItem>
                  <SelectItem value="meta-llama/Meta-Llama-3-70B-Instruct">meta-llama/Meta-Llama-3-70B-Instruct</SelectItem>
                  <SelectItem value="meta-llama/Meta-Llama-3.1-8B">meta-llama/Meta-Llama-3.1-8B</SelectItem>
                  <SelectItem value="meta-llama/Meta-Llama-3.1-8B-Instruct">meta-llama/Meta-Llama-3.1-8B-Instruct</SelectItem>
                  <SelectItem value="meta-llama/Meta-Llama-3.1-70B">meta-llama/Meta-Llama-3.1-70B</SelectItem>
                  <SelectItem value="meta-llama/Meta-Llama-3.1-70B-Instruct">meta-llama/Meta-Llama-3.1-70B-Instruct</SelectItem>
                  <SelectItem value="microsoft/Phi-3.5-mini-instruct">microsoft/Phi-3.5-mini-instruct</SelectItem>
                  <SelectItem value="microsoft/Phi-3-mini-4k-instruct">microsoft/Phi-3-mini-4k-instruct</SelectItem>
                  <SelectItem value="microsoft/Phi-3-small-8k-instruct">microsoft/Phi-3-small-8k-instruct</SelectItem>
                  <SelectItem value="microsoft/Phi-3-medium-4k-instruct">microsoft/Phi-3-medium-4k-instruct</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>
        {/* This is the second row!!!!!!!!!!!!!!!!! */}

        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <Card x-chunk="A card showing the total subscriptions and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">GPU type to be used for training</CardTitle>
              {/* <Users className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <Input id="picture" type="text" placeholder = "Nvidia GeForce RTX 4070 Super" />
            </CardContent>
          </Card>
          <Card x-chunk="A card showing the total subscriptions and the percentage difference from last month.">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commit hash from the Hugging Face repository</CardTitle>
              {/* <Users className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <Input id="picture" type="text" placeholder = "Commit hash" />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
