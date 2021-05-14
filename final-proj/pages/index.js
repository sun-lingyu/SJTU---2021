import React, { useEffect, useState } from "react";
import Head from 'next/head'
import Header from "./header"
import Middle from "./middle"
import Content from "./content"
import Banner from "./carousel"
import {fetchData} from "../lib/fetch_data"

export default function Home({data}) {
  return (
    <>
    <Head>
        <title>美团</title>
        <script type="text/babel" src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
        <script type="text/babel" src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
        <script type="text/babel" src='/static/more_data.js'/>
    </Head>

    <body>
      <Header name="美团"/>
      <div id="container">
        <Banner/>
        <Middle/>
        <Content data={data}/>
      </div>
    </body>
    </>
  );
}

export async function getServerSideProps(){
  const file=fetchData("data0.json");
  let data = JSON.parse(file);
  return {
    props:{ data }
  }
}

