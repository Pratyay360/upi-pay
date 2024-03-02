'use client'
import { useState, useEffect } from "react";
import Image from "next/image"
import data from "../data.json"
import { useSearchParams } from "next/navigation";
import BlockFalse from "./blockFalse";
import BlockTrue from "./blockTrue";
import BlockElse from "./blockElse";
export default function Body() {
    const searchParams = useSearchParams();
    const id = searchParams.get("upiid");
    const name = searchParams.get("name");
    const money = searchParams.get("money");
    data.UPI = id || "";
    data.NAME = name || "";
    if(isNaN(Number(money))){
        data.MONEY = "0";
    }else{
        data.MONEY = money || "";
    }
    return (
        <>
            <script>
                console.log(`
                \n ██╗░░░██╗██████╗░██╗
                \n ██║░░░██║██╔══██╗██║
                \n ██║░░░██║██████╔╝██║
                \n ██║░░░██║██╔═══╝░██║
                \n ╚██████╔╝██║░░░░░██║
                \n ░╚═════╝░╚═╝░░░░░╚═╝ 
                `);
            </script>
            {
                (data.UPI=="" && data.NAME=="") ? (
                    <div>
                        <BlockFalse />
                    </div>
                ) : (data.UPI!="" && data.NAME !="") ? (
                    <div>
                        <BlockTrue />
                    </div>
                ) : (
                    <div>
                        <BlockElse />
                    </div>
                )
            }
        </>

    )
}