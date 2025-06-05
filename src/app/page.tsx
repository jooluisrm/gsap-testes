"use client"

import { GsapScroll } from "@/components/gsapScroll/gsapScroll";
import { GsapSimples } from "@/components/gsapSimples/gsapSimples";

export default function Home() {


    return (
        <main>
            <GsapSimples />
            <GsapScroll />
            <GsapSimples />
            <GsapSimples />
        </main>
    );
}
