import './App.css'
import { Button } from "@/components/ui/button"
import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";


function App() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <div>
      <h1 className='text-purple-900 text-center'>TESTING</h1>
      <Button>Click me</Button>

      </div>
      <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
     
    </>
  )
}

export default App
