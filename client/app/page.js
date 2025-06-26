"use client"
import { io } from "socket.io-client";
import { useEffect } from "react";


const socket = io("http://localhost:3001")


export default function Home() {

  useEffect(() => {
    socket.emit("client-ready", "Hello Server!");

  }, []);
  return (
    <>
      <button onClick={()=>{socket.emit("button-clicked", "I clicked it")}}>Click me</button>
    </>
  );
}
