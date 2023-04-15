// import all entrypoints to test, do not do this in your own app
import "../entrypoints.js";

import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useCallback } from "react";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { CallbackManager } from "langchain/callbacks";
import { LLMChain } from "langchain/chains";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
} from "langchain/prompts";
import IndexCodebaseForm from "./components/IndexCodebaseForm";
import ChatComponent from "./components/ChatComponent";
import howToDo from '../images/howToWork.png';
import sSLCertified from '../images/sSLCertified.png';
import safeFromBugs from '../images/safeFromBugs.png';

import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] });

// Don't do this in your app, it would leak your API key
const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

export default function Home() {
  const runChain = useCallback(async () => {
    const llm = new ChatOpenAI({
      openAIApiKey: OPENAI_API_KEY,
      streaming: true,
      callbackManager: CallbackManager.fromHandlers({
        handleLLMNewToken: async (token) =>
          console.log("handleLLMNewToken", token),
      }),
    });

    // Test count tokens
    const n = await llm.getNumTokens("Hello");
    console.log("getNumTokens", n);

    // Test a chain + prompt + model
    const chain = new LLMChain({
      llm,
      prompt: ChatPromptTemplate.fromPromptMessages([
        HumanMessagePromptTemplate.fromTemplate("{input}"),
      ]),
    });
    const res = await chain.run("hello");

    console.log("runChain", res);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue&display=swap" rel="stylesheet" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.introTitle}>Introducing ChadGPT</h1>
        <p className={styles.introDescription}>Figure out what’s wrong with your smart contract and how to fix it with this based site..</p>
        <IndexCodebaseForm />
        <Image src={sSLCertified} alt="sSLCertified" width={195} style={{marginBottom: 36}} />
        <Image src={howToDo} alt="howToDo" width={1200} style={{marginBottom: 36}} />
        <p className={styles.hereYouGot}>Here’s What You Get BB</p>
        <Image src={howToDo} alt="howToDo" width={1200} style={{marginBottom: 36}} />
        <Image src={safeFromBugs} alt="safeFromBugs" width={373} />
        <p className={styles.safeText}>Much time is spent and many bounties are paid out due to low to medium tier errors/vulnerabilities.</p>
        <p className={styles.safeText}>ChadGPT catches many of these bugs and will save you money on bounties and give you more resources to focus on higher level vulnerabilities.</p>
        <h3 className={styles.qaTitle}>Questions & Answers</h3>
        <div className={styles.qaBox}>
          <span className={styles.q}>Why this Project?</span>
          <span className={styles.a}>We wanted to use AI to benefit the blockchain, and after Tim’s idea was crushed Kevin got his way.</span>
        </div>
        <div className={styles.qaBox}>
          <span className={styles.q}>What tools are you using?</span>
          <span className={styles.a}>- LangChain.js</span>
          <span className={styles.a}>- DeFi Hack Labs repo</span>
          <span className={styles.a}>- ChatGPT API</span>
        </div>
      </main>
    </>
  );
}
