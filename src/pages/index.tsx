import Image from "next/image";
import { Inter } from "next/font/google";
import BookList from "@/components/book/BookList";
import Counter from "@/components/counter/Counter";
import FormBasic from "@/components/form/FormBasic";
import CardList from "@/components/card/CardList";
import CounterIncrement from "@/components/increment/CounterIncrement";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <BookList /> */}
      {/* <FormBasic /> */}
      {/* <CardList /> */}
      <CounterIncrement />
    </div>
  );
}
