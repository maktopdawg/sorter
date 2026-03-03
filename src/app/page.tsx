'use client'
import { useState } from "react";
import axios from "axios";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import ResDisplay from "@/components/ResDisplay";

const Home = () => {
  const [apiUrl, setApiUrl] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [res, setRes] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setRes(null)
    setError(null)

    try {
      const res = await axios.post(
        "https://yhxzjyykdsfkdrmdxgho.supabase.co/functions/v1/application-task",
        {url: apiUrl, email: email},
        {headers: {"Content-Type": "application/json"}}
      )

      setRes(JSON.stringify(res.data, null, 2))
    } catch (error: unknown) {
      if (error instanceof Error) setError(error.message)
      else setError('Unknown error just occured.')
    } finally {
      setLoading(false)
    }
  }
  
  const component = (
    <main className='flex justify-center items-center min-h-screen bg-gray-300'>
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">API Validation Tester</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            type="email"
            placeholder="Enter your email"
            value={email}
            required
            onChange={setEmail}
          />

          <InputField
            type="url"
            placeholder="Enter your API Endpoint URL"
            value={apiUrl}
            required
            onChange={setApiUrl}
          />

          <Button type="submit" loading={loading} disabled={loading}
          >Test API</Button>
        </form>

        <ResDisplay response={res} error={error} />
      </div>
    </main>
  )

  return component;
}

export default Home;